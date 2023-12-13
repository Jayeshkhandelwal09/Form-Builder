const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController.js');

router.get('/:formId', responseController.getResponses);
router.post('/', responseController.createResponse);

module.exports = router;
