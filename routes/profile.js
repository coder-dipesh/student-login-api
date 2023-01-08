const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const { verifyToken, verifyTokenAndAuthorization } = require("../middleware/verifyToken");

router.route("/").get(verifyToken, profileController.getUserProfile);

module.exports = router;
