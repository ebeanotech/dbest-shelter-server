const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  updateUser,
  deleteUser,
  getAllUsers,
  getUser,
} = require("../controllers/Users");

router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
router.route("/login").post(login);
router.route("/signup").post(signup);

module.exports = router;
