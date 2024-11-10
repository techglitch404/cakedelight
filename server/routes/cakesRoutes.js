const express = require('express')
const { registerCakes, upload, fetchCakes } = require('../controllers/cakeController')

const router = express.Router()

// Register cake
router.post('/register', upload, registerCakes)

// Fetch cake
router.get('/', fetchCakes)

module.exports = router