const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    cName: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
