const mongoose = require("mongoose");

// Define the schema for the cards collection
const reviewSchema = new mongoose.Schema({
  reviewID: {
    type: String, // or ObjectId if cardID is an ObjectId
    required: true,
    unique: true,
  },
  reviewArray: [
    {
      owner: {
        type: String,
        
      },
      review: {
        type: String,
        required: true,
      },
      rated: {
        type: Number,
        required: true,
      },
      // You can include other properties related to each review if needed
    },
  ],
  overallRating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

// Create a model using the schema
const db = mongoose.model("ReviewDB", reviewSchema);

module.exports = db;
