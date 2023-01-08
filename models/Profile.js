const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    address: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    number: {
      type: String,
    },
    avatar: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
