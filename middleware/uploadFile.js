const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, callback) => {
    let extension = path.extname(file.originalname);
    callback(null, `${file.fieldname}-${Date.now()}${extension}`);
  },
});

//now we need to check the file type

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filefilter,
});

module.exports = upload;
