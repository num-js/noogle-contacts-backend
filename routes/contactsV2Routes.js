const express = require('express');
const { getContacts, createContact, getSpecificContact, deleteContact, updateContact } = require('../controllers/contactsV2Controller');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/get_contacts', authMiddleware, getContacts);

router.post('/create_contact', authMiddleware, createContact);

router.get('/get_specific_contact/:contact_id', authMiddleware, getSpecificContact);

router.delete('/delete_contact/:contact_id', authMiddleware, deleteContact);

router.patch('/update_contact/:contact_id', authMiddleware, updateContact);

module.exports = router;