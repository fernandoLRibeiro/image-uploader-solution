const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.fieldname + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

const app = express();

app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extented: true }));
app.use(cors());

app.use("/uploads", express.static("uploads"));

app.post("/", upload.single("image"), (req, res) => {
  return res.send({
    path: req.file.path,
    possibleUrl: `${__dirname}/${req.file.path}`,
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
