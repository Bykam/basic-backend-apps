const {
  createNewBook,
  readAllBooks,
  readBookById,
  updateBookById,
  deleteBookById,
} = require("./handler");

const route = [
  {
    method: "POST",
    path: "/books",
    handler: createNewBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: readAllBooks,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: readBookById,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBookById,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookById,
  },
];

module.exports = route;
