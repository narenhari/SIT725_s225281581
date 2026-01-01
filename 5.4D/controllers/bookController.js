const bookService = require('../services/bookService');

const validateAllowedFields = (body) => {
    const allowed = ['id', 'title', 'author', 'year', 'genre', 'summary', 'price'];
    const incomingKeys = Object.keys(body);
    return incomingKeys.every(key => allowed.includes(key));
};

exports.getAllBook = async (_req, res, next) => {
    try {
        const items = await bookService.getAllBook();
        res.status(200).json({ statusCode: 200, data: items, message: 'Success' });
    } catch (err) { next(err); }
};

exports.getBookById = async (req, res, next) => {
    try {
        const item = await bookService.getBookById(req.params.id);
        if (!item) return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ data: item, message: 'Success' });
    } catch (err) { next(err); }
};

exports.createBook = async (req, res, next) => {
    try {
        if (!validateAllowedFields(req.body)) {
            return res.status(400).json({ message: "Bad Request: Extra fields detected" });
        }

        const newItem = await bookService.createBook(req.body);
        res.status(201).json({
            data: newItem,
            developedBy: "s225281581", 
            message: "Book created successfully"
        });
    } catch (err) {
        if (err.code === 11000) return res.status(409).json({ message: "Conflict: Duplicate ID" });
        if (err.name === 'ValidationError') return res.status(400).json({ message: err.message });
        next(err);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        if (!validateAllowedFields(req.body)) return res.status(400).json({ message: "Extra fields detected" });
        if (req.body.id && req.body.id !== bookId) return res.status(400).json({ message: "ID is immutable" });

        const updated = await bookService.updateBook(bookId, req.body);
        if (!updated) return res.status(404).json({ message: "Not Found" });

        res.status(200).json({ data: updated, developedBy: "s225281581", message: "Updated" });
    } catch (err) {
        if (err.name === 'ValidationError') return res.status(400).json({ message: err.message });
        next(err);
    }
};