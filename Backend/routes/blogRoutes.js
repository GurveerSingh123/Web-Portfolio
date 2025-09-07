const express = require('express');
const router = express.Router();
const {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
} = require('../controllers/blogController');

// Get all blogs
router.get('/', getBlogs);

// Create a new blog
router.post('/', createBlog);

// Get a single blog by ID
router.get('/:id', getBlogById);

router.patch("/:id",updateBlog);

module.exports = router;
