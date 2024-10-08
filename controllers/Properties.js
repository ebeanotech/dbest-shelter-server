const Property = require("../models/Property");
const { StatusCodes } = require("http-status-codes");

const getAllProperties = async (req, res) => {
  let allProperties = await Property.find({});

  if (!allProperties) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "No properties found", success: false });
  }

  return res
    .status(StatusCodes.OK)
    .json({ properties: allProperties, success: true });
};

const getProperty = async (req, res) => {
  res.send("get single Property");
};

const createProperty = async (req, res) => {
  const {
    title,
    location,
    price,
    address,
    description,
    features,
    bathrooms,
    bedrooms,
    images,
    propertyType,
    condition,
  } = req.body;

  if (
    !title ||
    !location ||
    !price ||
    !address ||
    !description ||
    !bathrooms ||
    !bedrooms ||
    !images ||
    !propertyType ||
    !condition
  ) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please fill all fields", success: false });
  }

  const property = await Property.create({
    title,
    location,
    price,
    address,
    description,
    features,
    bathrooms,
    bedrooms,
    images,
    propertyType,
    condition,
  });

  res.status(StatusCodes.CREATED).json({ property });
};

const updateProperty = async (req, res) => {
  res.send("update Property");
};

const deleteProperty = async (req, res) => {
  res.send("delete Property");
};

module.exports = {
  getAllProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
};
