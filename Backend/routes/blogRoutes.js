const express = require('express');
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getBlogById,
} = require('../controllers/blogController');

// Get all blogs
router.get('/', getBlogs);

// Create a new blog
router.post('/', createBlog);

// Get a single blog by ID
router.get('/:id', getBlogById);

module.exports = router;
