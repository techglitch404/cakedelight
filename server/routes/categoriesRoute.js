const express = require('express');
const { regsiterCategories, upload, fetchCategories } = require('../controllers/categoriesController');

const router = express.Router()

// Register categories
router.post('/register', upload, regsiterCategories)

// Fetch categories
router.get('/', fetchCategories)

module.exports = router;