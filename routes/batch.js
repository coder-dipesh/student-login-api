const express = require("express");
const router = express.Router();
const batchController = require("../controllers/batchController");
const { verifyToken, verifyTokenAndAuthorization } = require("../middleware/verifyToken");

router
  .route("/")
  .get(verifyToken, batchController.getBatches)
  .post(verifyToken, batchController.createBatch)
  .put(verifyToken, batchController.updateBatch)
  .delete(verifyToken, batchController.deleteBatch);

module.exports = router;
