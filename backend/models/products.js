const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
    trim: true,
    maxLength: [100, "Please enter a name shorter than 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter the name"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select a category"],
    enum: {
      values: [
        "Clothes",
        "Shoes",
        "Accessories",
        "Electronics",
        "Cameras",
        "Groceries",
        "Books",
        "Beauty and Health",
        "Sports",
        "Household Items",
        "Cosmetics",
        "Headphones",
        "Laptops",
        "Food"
      ],
      message: "Please select a valid category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter a product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter the stock"],
    maxLength: [5, "Please enter a stock shorter than 5 characters"],
    default: 0,
  },
  numofReviews: {
    type: Number,
    default: 0,
  },
  review: [
    {
      name: {
        type: String,
        required: [true, "Please enter the name"],
        trim: true,
        maxLength: [100, "Please enter a name shorter than 100 characters"],
      },
      designation: {
        type: String,
        required: [true, "Please enter the designation"],
        trim: true,
        maxLength: [
          100,
          "Please enter designation shorter than 100 characters",
        ],
      },
      comment: {
        type: String,
        required: [true, "Please enter the comment"],
        trim: true,
        maxLength: [500, "Please enter comment under 500 characters"],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
