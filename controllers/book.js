const Book = require("../models/book");

const getBooks = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const books = await Book.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // console.log(books);

    const count = await Book.countDocuments();
    res
      .status(200)
      .json({ books, totalPages: Math.ceil(count / limit), currentPage: page });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addBook = async (req, res) => {
  try {
    const book = req.body;
    const newBook = await Book.create(book);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getBooks, addBook, getBook, updateBook, deleteBook };
