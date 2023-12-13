const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController.js');



router.get('/', formController.getAllForms);
router.get('/get/:id', formController.getSingleForm);
router.post('/', formController.createForm);
router.delete('/:id', formController.deleteForm);
router.patch('/:id', formController.updateForm);

module.exports = router;
