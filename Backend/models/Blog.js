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

    readTime: {
      type: String,
      default: "5 min Read",
    },

      createdAt: {
      type: Date,
      default: Date.now,  // if not given, set automatically
    },

  },
 { timestamps: { createdAt: false, updatedAt: true } } 
);

module.exports = mongoose.model('Blog', BlogSchema);
