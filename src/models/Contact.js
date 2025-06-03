const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: Number,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
