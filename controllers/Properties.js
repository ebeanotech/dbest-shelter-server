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
  const { id } = req.params;
  const { title, price, description } = req.body;

  try {
    const item = await Property.findByIdAndUpdate(
      id,
      { title, price, description },
      { new: true, runValidators: true }
    );

    if (!item) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Item not found", success: false });
    }

    return res.status(StatusCodes.OK).json({ item, success: true });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid data or ID", success: false });
  }
};

const deleteProperty = async (req, res) => {
  const { id } = req.params;
  const item = await Property.find({ _id: id });

  if (!item) {
    return res.send("No item matches id");
  }

  await Property.deleteOne({ _id: id });

  res.status(StatusCodes.OK).json({ msg: "Item deleted", item });
};

module.exports = {
  getAllProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
};
