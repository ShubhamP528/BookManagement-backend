const mongoose = require("mongoose");
const Book = require("./models/book");

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    yearPublished: 1988,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-apocalyptic",
    yearPublished: 2006,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    yearPublished: 1997,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    yearPublished: 2003,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Thriller",
    yearPublished: 2005,
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    genre: "Adventure",
    yearPublished: 2001,
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical",
    yearPublished: 2005,
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romance",
    yearPublished: 2012,
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "Thriller",
    yearPublished: 2012,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    yearPublished: 2008,
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
