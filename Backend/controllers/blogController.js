const Blog = require('../models/Blog'); // make sure Blog model exists

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    res.status(500).json({ message: "Server error" });
  }
};


// Update a blog by ID
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // only update fields provided
      { new: true, runValidators: true } // return updated doc & validate
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ message: "Server error" });
  }
};


// Export them so routes can use them
module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog
};
