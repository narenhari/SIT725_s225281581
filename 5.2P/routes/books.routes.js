const express = require('express');
const router = express.Router();

const { listBooks, showBook } = require('../controllers/bookController');

router.get('/api/books', listBooks);

router.get('/api/books/:id', showBook);

module.exports = router;