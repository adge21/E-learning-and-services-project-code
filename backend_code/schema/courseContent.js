const mongoose = require('mongoose');

// Define the schema for your MongoDB collection
const courseContent = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseContent: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create a model using the schema
const courseContents = mongoose.model('courseContents', courseContent);

// Export the model
module.exports = courseContents;