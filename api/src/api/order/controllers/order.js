
("use strict");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { items } = ctx.request.body;
    

    const lineItems = await Promise.all(
      items.map(async (product) => {
        const lineItem = await strapi
          .service("api::item.item")
          .findOne(product.id);
            
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: lineItem.title,
            },
            unit_amount: parseInt(lineItem.price * 100),
          },
          quantity: product.quantity,
        };
      })
    );
  
    if(items){
      try {
        const session = await stripe.checkout.sessions.create({
          mode: "payment",
          line_items: lineItems,
          success_url: `${process.env.CLIENT_URL}?success=true`,
          cancel_url: `${process.env.CLIENT_URL}?success=false`,
          shipping_address_collection: { allowed_countries: ["US", "CA"] },
          payment_method_types: ["card"],
        });
        
        console.log("awaiting service")

        //it was a syntax issue...
        const entry = await strapi.service("api::order.order").create({
          data: {
            stripeId: session.id,
            items,
          },
        });

        return { stripeSession: session };
      } catch (err) {

        ctx.response.status = 500;
        return err;
      }
    }
  },
  
}));
