const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("datbase connect");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connect;
