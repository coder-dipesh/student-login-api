const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    batch: {
      type: String,
    },
    course: {
      type: Array,
    },
    username: {
      type: String,
      required: [true, "Please enter your username!"],
      unique: [true, "Username already exists!"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
      minlength: [8, "Password must be at least 8 characters"],
      trim: true,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
