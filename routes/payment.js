const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/authorization");

const { paymentrequest, PaymentSuccess } = require("../controllers/Payment");

// Endpoint to create a payment intent
router.post("/craete-checkout-session", requireAuth, paymentrequest);
router.delete("/payment-success/:totalPrice", requireAuth, PaymentSuccess);

module.exports = router;
