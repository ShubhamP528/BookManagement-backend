// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2023-10-16",
// });

const User = require("../models/user");
const Order = require("../models/Order");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paymentrequest = async (req, res) => {
  try {
    const { products } = req.body;
    console.log(req.body);

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.book.title,

          // images: [product.image],
        },
        unit_amount: product.book.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://bookmanagement528.netlify.app/success",
      cancel_url: "https://bookmanagement528.netlify.app/cancel",
    });

    res.status(200).json({
      id: session.id,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const PaymentSuccess = async (req, res) => {
  try {
    console.log(req.params); // Log the request body to verify the data

    const { totalPrice } = req.params;
    const user = await User.findOne(req.user._id);
    const cart = user.cart;

    if (!cart || cart.length === 0) {
      return res.status(200).json({ message: "Cart is empty" });
    }

    const order = await Order.create({
      user: user._id,
      items: cart,
      totalAmount: totalPrice,
      status: "success",
      createdAt: new Date(), // Set to current date and time
    });

    console.log(order);
    user.cart = [];
    await user.save();

    res.status(200).json({ message: "Payment Success" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { paymentrequest, PaymentSuccess };
