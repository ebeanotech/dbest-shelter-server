const mongoose = require("mongoose");
const CodeSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  used: {
    type: Boolean,
    default: false,
  },
});

const Code = mongoose.model("Code", CodeSchema);

module.exports = Code;
