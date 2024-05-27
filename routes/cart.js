const express = require("express");
const router = express.Router();
const {
  addItem,
  removeItem,
  showCart,
  clearCart,
} = require("../controllers/cart");
const requireAuth = require("../middleware/authorization");

router.get("/cart", requireAuth, showCart);
router.post("/cart/:itemId", requireAuth, addItem);
router.put("/cart/:itemId", requireAuth, removeItem);
router.delete("/cart", requireAuth, clearCart);

module.exports = router;
