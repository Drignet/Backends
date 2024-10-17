const Contacts = require('../models/contacts.model.js');

const createContact = async (req, res) => {
  try{
    const contact = await Contacts.create(req.body)
    res.status(201).json(contact)
  }catch(error){
    res.status(500).json({message: error.message || "Server Error During Contact Creation"})
  }
}

const getContact = async (req, res) => {
  try{
    const {id} = req.params
    const singleContact = await Contacts.findById(id)
    res.status(200).json({singleContact})
  }catch(error){
    res.status(500).json({message: error.message || "Server Error During Finding a Contact"})
  }
}

const getContacts = async (req, res) => {
  try{
    const allContacts = await Contacts.find()
    res.status(200).json(allContacts)
  }catch(error){
    res.status(500).json({message: error.message || "Server Error During Retrieving All Contacts"})
  }
}

const updateContact = async (req, res) => {
  try{
    const {id} = req.params
    const newContact = await Contacts.findByIdAndUpdate(id, req.body)
    res.status(200).json(newContact)
  }catch(error){
    res.status(500).json({message: error.message || "Server Error During Contact Update"})
  }
}

const deleteContact = async (req, res) => {
  try{
    const {id} = req.params
    const delContact = await Contacts.findByIdAndDelete(id)
    if(!delContact){
      return res.status(400).json({message: "Contact Not Found!"})
    }
    res.status(200).json(delContact)
  }catch(error){
    res.status(500).json({message: error.message || "Server Error During Contact Deleting"})
  }
}

module.exports = {
  createContact,
  getContact,
  getContacts,
  updateContact,
  deleteContact
}