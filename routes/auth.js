const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

router.post("/register", async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    batch: req.body.batch,
    course: req.body.course,
    username: req.body.username,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
  });

  // Save user to database
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Wrong username");
    }
    // Checking DB and User password
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;
    if (originalPassword !== inputPassword) {
      return res.status(401).json("Wrong password");
    }
4
    let data = {
      id: user._id,
    };

    const accessToken = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    // Send the access token to user

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
