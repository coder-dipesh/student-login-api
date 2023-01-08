const Profile = require("../models/Profile");

// Get user data of logged in user
// To show in profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json("User doesn't exist!");
    }

    const userData = {
      id: user._id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      batch: user.batch,
      course: user.course,
    };

    res.status(200).json({
      message: "User get success!",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getUserProfile,
};
