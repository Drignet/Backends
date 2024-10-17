const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema(
  {
    surname: {type: String, required: true},
    firstname: {type: String},
    email: {type: String, unique: true},
    phone: {type: String, unique: true}
  },
  {
    timestamps: true,
  }
  );
  
  const Contacts = mongoose.model("Contacts", contactsSchema);
  
  module.exports = Contacts;