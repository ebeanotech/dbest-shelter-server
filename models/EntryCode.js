const mongoose = require("mongoose");
const EntryCodeSchema = new mongoose.Schema(
  {
    entrycode: {
      type: String,
    },
  },
  { timestamps: true }
);

const EntryCode = mongoose.model("EntryCode", EntryCodeSchema);

module.exports = EntryCode;
