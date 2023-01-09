const Batch = require("../models/Batch");

const getBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.status(200).json({
      success: true,
      message: "Batches fetched successfully",
      data: batches,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const createBatch = async (req, res) => {
  const newBatch = new Batch(req.body);
  try {
    const savedBatch = await newBatch.save();
    res.status(200).json({
      success: true,
      message: "Batch created successfully",
      data: savedBatch,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const updateBatch = async (req, res) => {
  try {
    const updatedBatch = await Batch.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Batch updated successfully",
      data: updatedBatch,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const deleteBatch = async (req, res) => {
  try {
    await Batch.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Batch deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  getBatches,
  createBatch,
  updateBatch,
  deleteBatch,
};
