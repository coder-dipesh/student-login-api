const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const { verifyToken, verifyTokenAndAuthorization } = require("../middleware/verifyToken");

router
  .route("/")
  .get(verifyToken, courseController.getCourse)
  .post(verifyToken, courseController.createCourse)
  .put(verifyToken, courseController.updateCourse)
  .delete(verifyToken, courseController.deleteCourse);

module.exports = router;
