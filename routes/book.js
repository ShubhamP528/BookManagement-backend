const express = require("express");
const router = express.Router();
const authorization = require("../middleware/authorization");

const {
  getBooks,
  addBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.get("/books", authorization, getBooks);
router.get("/books/:id", authorization, getBook);
router.post("/books", authorization, addBook);
router.put("/books/:id", authorization, updateBook);
router.delete("/books/:id", authorization, deleteBook);
module.exports = router;
