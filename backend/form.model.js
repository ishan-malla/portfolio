const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const formData = mongoose.model("Form", FormSchema);
module.exports = formData;
