const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController'); 

router.get('/', bookController.getAllBook);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook); 
router.put('/:id', bookController.updateBook);

module.exports = router;