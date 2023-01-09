const mongoose = require("mongoose");

const batchSchema = mongoose.Schema(
  {
    bName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Batch", batchSchema);
