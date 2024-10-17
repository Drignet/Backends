const express = require('express');
const router = express.Router();
const {createContact, getContact, getContacts, updateContact, deleteContact} = require('../controllers/contacts.controller.js')

router.post('/', createContact);
router.get('/:id', getContact);
router.get('/', getContacts);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact)

module.exports = router