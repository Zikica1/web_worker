const express = require('express');
const router = express.Router();
const messageController = require('../../controller/contactController');
const messageValidation = require('../../config/validation/messageValidation');
const validateRequest = require('../../middleware/validateRequest');
router
  .route('/')
  .post(messageValidation, validateRequest, messageController.createNewMessage);

module.exports = router;
