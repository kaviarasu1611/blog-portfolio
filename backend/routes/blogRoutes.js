const express = require("express");
const Blog = require("../models/Blog");

const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.log("Blog fetch error:", error.message);

    res.status(500).json({
      message: "Failed to fetch blogs",
      error: error.message,
    });
  }
});

// Add a blog
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const savedBlog = await blog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to add blog" });
  }
});

// Get one blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog" });
  }
});

// Delete a blog
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

module.exports = router;