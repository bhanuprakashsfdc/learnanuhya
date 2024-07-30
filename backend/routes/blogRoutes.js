const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Get all blogs
router.get('/', blogController.getAllBlogs);

// Get blog by slug
router.get('/:slug', blogController.getBlogBySlug);

module.exports = router;
