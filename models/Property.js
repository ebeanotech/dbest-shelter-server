const mongoose = require("mongoose");
const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      maxlength: [80, "Title too long"],
    },
    price: {
      type: String,
      required: [true, "Please provide price"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      maxlength: [1000, "Description cannot be more than 1000 characters"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
      maxlength: [100, "Location cannot be more than 100 characters"],
    },
    address: {
      type: String,
      required: [true, "Please provide an address"],
      maxlength: [200, "Address cannot be more than 200 characters"],
    },
    features: {
      type: String,
      maxlength: [1000, "Featured cannot be more than 1000 characters"],
      default:
        "All Rooms Ensuite,Fully Fitted Kitchen,Dining Area,POP Ceilings,Stamp Concrete Floor,24hrs Security,",
    },
    bedrooms: {
      type: String,
      required: [true, "Please provide num of bedrooms"],
    },
    bathrooms: {
      type: String,
      required: [true, "Please provide num of bathrooms"],
    },
    images: {
      type: [String],
      required: [true, "Please upload images"],
    },
    propertyType: {
      type: String,
      enum: ["duplex", "bungalow", "land", "apartment"],
    },
    condition: {
      type: String,
      enum: ["sale", "rent", "lease"],
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: [true, "Please provide user"],
    // },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;
