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

const allowedOrigins = [
  "http://localhost:3001",
  "https://bookmanagemenr.netlify.app",
  "https://book-management-frontend-wheat.vercel.app/",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
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
