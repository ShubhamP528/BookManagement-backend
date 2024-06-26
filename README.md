# Book Management API

This is the backend API for the Book Management App. It provides endpoints for managing books, including adding, viewing, editing, and deleting books, as well as user authentication.

## Table of Contents

- [Book Management API](#book-management-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
  - [API Endpoints](#api-endpoints)
  - [Project Structure](#project-structure)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) and npm (or yarn).
- You have a basic understanding of RESTful APIs and JavaScript.
- You have MongoDB installed and running, either locally or through a service like MongoDB Atlas.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-management-api.git
   cd book-management-api

   ```

2. Install the dependencies:

   npm install

   # or

   yarn install

3. Create a .env file in the root of the project and configure your environment variables (see Environment Variables section).

   npm start

   # or

   yarn start

4. Start the development server:

   npm start

   # or

   yarn start

## Environment Variables

    Create a .env file in the root of the project and add the following environment variables:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key

## Available Scripts

    In the project directory, you can run:

        npm start or yarn start

    Runs the app in development mode with Nodemon for automatic server restarts.

        npm run server or yarn server

## API Endpoints

    The following endpoints are available in the API:

     Auth
        POST /signup: Register a new user
        POST /login: Login an existing user
    Books
        GET /books: Get all books (supports pagination with page and limit query parameters)
        GET /books/:id: Get a single book by ID
        POST /books: Create a new book
        PUT /books/:id: Update a book by ID
        DELETE /books/:id: Delete a book by ID

## Project Structure

    Here is a basic overview of the project structure:

        BookManagement-backend/
        ├── config/
        │ └── database.js
        ├── controllers/
        │ ├── book.js
        │ └──  user.js
        ├── middleware/
        │ └──  authorization.js
        ├── models/
        │ ├── book.js
        │ └── user.js
        ├── routes/
        │ ├── book.js
        │ └──user.js
        ├── .env
        ├── .gitignore
        ├── index.js
        ├── package-lock.json
        ├── package.json
        ├── seed.js
        └── vercel.json
