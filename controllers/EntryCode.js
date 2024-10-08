const { StatusCodes } = require("http-status-codes");
const EntryCode = require("../models/EntryCode");

const getCode = async (req, res) => {
  const result = await EntryCode.find({});

  let secretCode;
  result.forEach((item) => {
    secretCode = item.entrycode;
  });

  res.status(StatusCodes.CREATED).json({ secretCode });
};

module.exports = {
  getCode,
};
