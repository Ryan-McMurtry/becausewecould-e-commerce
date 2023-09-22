const stripe = require("stripe")(process.env.STRIPE_KEY);
("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { items } = ctx.request.body;
    console.log(items)

    const lineItems = await Promise.all(
      items.map(async (item) => {
        const lineItem = await strapi
          .service("api::item.item")
          .findOne(item.id);
          console.log(lineItem);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: lineItem.title,
            },
            unit_amount: lineItem.price * 100,
          },
          quantity: lineItem.quantity,
        };
      })
    );
    

    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api::order:order").create({
        data: {
          items,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (err) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
