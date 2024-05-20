const express = require("express");
const app = express();
require("dotenv").config();
const dbconnect = require("./config/database");
const book = require("./routes/book");
const user = require("./routes/user");
// const seed = require("./seed");
const cors = require("cors");

// Allow requests from the specified- origin
app.use(
  cors({
    origin: ["http://localhost:3001"],
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

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server is running on port 8080");
});
