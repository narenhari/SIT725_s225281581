// Import the service
const bookService = require('../services/bookService');

//Controller uses the service to get data
exports.getAllBook = async (_req, res, next) => {
  try {
    const items = await bookService.getAllBook();
    res.status(200).json({
      statusCode: 200,
      data: items,
      message: 'Book menu retrieved using service'
    });
  } catch (err) {
    next(err);
  }
};
exports.getBookById = async (req, res, next) => {
try {
        const bookId = req.params.id; 
        const item = await bookService.getBookById(bookId);
        if (!item) {
            return res.status(404).json({
                message: `Book with ID ${bookId} not found`
            });
        }       
        res.status(200).json({
            data: item,
            message: `Book retrieved successfully: ${bookId}`
        });
    } catch (err) {
        next(err);
    }
};