const bookItems = require('../models/bookModel');

async function getAllBook() {
  return await bookItems.find({}).lean({ getters: true });
}

async function getBookById(bookId) {
    return await bookItems.findOne({ id: bookId }).lean({ getters: true }); 
}
  
  module.exports = {
    getAllBook,
    getBookById
  };
  