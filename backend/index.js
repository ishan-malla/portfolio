const express = require("express");
const mongoose = require("mongoose");
const Form = require("./form.model.js");
const app = express();
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

mongoose
  .connect
  //
  ()
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Connection error");
  });
