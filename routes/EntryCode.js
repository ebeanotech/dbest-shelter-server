const express = require("express");
const router = express.Router();
const { getCode } = require("../controllers/EntryCode");

router.get("/", getCode);

module.exports = router;
