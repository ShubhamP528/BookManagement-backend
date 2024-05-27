const User = require("../models/user");
const Book = require("../models/book");
const { default: mongoose } = require("mongoose");

const showCart = async (req, res) => {
  try {
    const user = await User.findOne(req.user._id).populate("cart.book");
    res.status(200).json(user.cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addItem = async (req, res) => {
  try {
    let { itemId } = req.params;

    const objectIdItemId = new mongoose.Types.ObjectId(itemId);

    const user = await User.findOne(req.user._id).populate("cart.book");
    let newCart = user.cart;

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].book?._id.equals(objectIdItemId)) {
        newCart[i].quantity++;
        user.cart = newCart;
        user.save();
        res.status(201).json({ message: "Book added to cart is done" });
        return;
      }
    }
    newCart.push({
      book: itemId,
      quantity: 1,
    });
    user.cart = newCart;
    user.save();
    res.status(201).json({ message: "Book added to cart is done" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const removeItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const objectIdItemId = new mongoose.Types.ObjectId(itemId);

    console.log(itemId);
    const user = await User.findOne(req.user._id).populate("cart.book");
    let newCart = user.cart;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].book?._id.equals(objectIdItemId)) {
        newCart[i].quantity--;
        if (newCart[i].quantity === 0) {
          newCart.splice(i, 1);
        }
        user.cart = newCart;
        user.save();
        res.status(201).json({ message: "Book remove to cart is done" });
        return;
      }
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const clearCart = async (req, res) => {
  try {
    const user = await User.findOne(req.user._id);
    user.cart = [];
    user.save();
    res.status(201).json({ message: "Cart is cleared" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addItem, removeItem, showCart, clearCart };
