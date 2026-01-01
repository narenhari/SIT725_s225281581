const bookItems = require('../models/bookModel');

async function getAllBook() {
    return await bookItems.find({}).lean({ getters: true });
}

async function getBookById(bookId) {
    return await bookItems.findOne({ id: bookId }).lean({ getters: true }); 
}

async function createBook(bookData) {
    const newBook = new bookItems(bookData);
    return await newBook.save();
}

async function updateBook(bookId, updateData) {
    return await bookItems.findOneAndUpdate(
        { id: bookId }, 
        updateData, 
        { 
            new: true,           
            runValidators: true 
        }
    );
}
  
module.exports = {
    getAllBook,
    getBookById,
    createBook,
    updateBook
};