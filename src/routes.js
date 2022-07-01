const {
  addBooks,
  showBooks,
  bookDetailsById,
  editBookById,
  deleteBooksById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: bookDetailsById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksById,
  },
];

module.exports = routes;
