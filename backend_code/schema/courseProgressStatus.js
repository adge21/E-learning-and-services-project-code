const mongoose = require('mongoose');

// Define the schema for your MongoDB collection
const courseProgress = new mongoose.Schema({
  emailId: { type: String, required: true },
  courseName: { type: String, required: true },
  progress: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create a model using the schema
const courseProgressStatus = mongoose.model('courseProgress', courseProgress);

// Export the model
module.exports = courseProgressStatus;