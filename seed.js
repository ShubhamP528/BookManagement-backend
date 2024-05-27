const mongoose = require("mongoose");
const Book = require("./models/book");

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    yearPublished: 1960,
    price: 7.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    yearPublished: 1949,
    price: 6.99,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    yearPublished: 1813,
    price: 9.49,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Tragedy",
    yearPublished: 1925,
    price: 8.99,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    yearPublished: 1851,
    price: 10.99,
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical",
    yearPublished: 1869,
    price: 12.99,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    yearPublished: 1951,
    price: 8.49,
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical",
    yearPublished: 1866,
    price: 11.49,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    yearPublished: 1937,
    price: 10.49,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Science Fiction",
    yearPublished: 1932,
    price: 7.99,
  },
];
const seedDatabase = async () => {
  try {
    // Insert new books
    await Book.insertMany(books);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
