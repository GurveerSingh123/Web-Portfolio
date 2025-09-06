const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "Anonymous",
    },
    tags: {
      type: [String],
      default: [],
    },
    images:{
      type: [String],
      default: [],
    },
  },
  { timestamps: true } // createdAt & updatedAt
);

module.exports = mongoose.model('Blog', BlogSchema);
