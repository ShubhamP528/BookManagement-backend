const express = require("express");
const app = express();
require("dotenv").config();
const dbconnect = require("./config/database");
// const seed = require("./seed");
const cors = require("cors");
// routes.
const book = require("./routes/book");
const user = require("./routes/user");
const payment = require("./routes/payment");
const cart = require("./routes/cart");
const Order = require("./routes/order");

// Allow requests from the specified- origin
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://bookmanagemenr.netlify.app",
      "https://book-management-frontend-wheat.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

dbconnect();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(book);
app.use(user);
app.use(payment);
app.use(cart);
app.use(Order);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server is running on port 8080");
});
