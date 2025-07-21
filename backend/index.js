const express = require("express");
const mongoose = require("mongoose");
const Form = require("./form.model.js");
const app = express();
const path = require("path");
const cors = require("cors");
app.listen(3000, () => {
  console.log("Server is running");
});

app.use(express.json());
app.use(cors());

app.post("/api/contact", async (req, res) => {
  try {
    const contact = await Form.create(req.body);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/downloads/resume", (req, res) => {
  const resumePath = path.join(
    __dirname,
    "files",
    "Ishan_Jung_Malla_resume.pdf"
  );
  res.download(resumePath, "Ishan_Jung_Malla_resume.pdf", (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(500).send("Error downloading file.");
    }
  });
});

mongoose
  .connect()
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Connection error");
  });
