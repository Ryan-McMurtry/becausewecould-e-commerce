const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { items } = ctx.request.body;
    

    const lineItems = await Promise.all(
      items.map(async (item) => {
        const lineItem = await strapi
          .service("api::item.item")
          .findOne(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: lineItem.title,
            },
            unit_amount: lineItem.price * 100,
          },
          quantity: item.quantity,
        };
      })
    );
    
    

    try {
      //.create isn't registering as a function when taken out of try/catch format
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: lineItems,
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
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
      //currently throwing a 500 error here
      //don't know if it's failing to access the stripe server or if the backend api is not receiving data
        ctx.response.status = 500;
        return err;
    }
  },
}));
