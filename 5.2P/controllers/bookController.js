// Import the service
const bookService = require('../services/bookService');

// Controller uses the service to get data
exports.getAllBooks = (req, res) => {
    const items = bookService.getAllBooks();
    res.json({
        status: 200,
        data: items,
        message: 'Book menu retrieved using service'
    });
};

const listBooks = (req, res) => {
    const items = bookService.getAllBooks();
    res.json({
        status: 200,
        data: items,
        message: 'Book menu retrieved using service'
    });
};

const showBook = (req, res) => {
    const { id } = req.params;
    const item = bookService.getBookById(id);
    res.status(200).json({
        status: 200,
        data: item,
        message: `Book retrieved successfully for ID ${id}`
    });

};

module.exports = {
    listBooks,
    showBook
};