const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads/",
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

app.post("/", upload.single("image"), (req, res) => {
  console.log(req);
  res.send("ok");
});

app.listen(5000, () => console.log("server started on port 5000"));
