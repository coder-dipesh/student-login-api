const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

//  Router
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");

// PORT
const PORT = process.env.PORT || 3000;

// DB connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    console.log("Connected to MongoDB");
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
  })
  .catch((err) => console.log(err));

// To accept json data
app.use(express.json());
// To serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route middleware
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);

app.listen(PORT, (error) => {
  if (!error) {
    console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
    console.log(`Server is Successfully Running, and App is listening on port ` + PORT);
  } else console.log("Error occurred, server can't start", error);
});
