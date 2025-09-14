const { body } = require('express-validator');

const validateMessage = [
  body('name')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),
  body('mail').normalizeEmail().isEmail().withMessage('Must be a valid email'),
  body('subject')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ max: 50 })
    .withMessage('Subject must be under 50 characters'),
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isLength({ min: 6, max: 15 })
    .withMessage('Phone number must be between 6 and 15 digits')
    .matches(/^[0-9+\-()\s]+$/)
    .withMessage('Phone number contains invalid characters'),
  body('text')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Text is required')
    .isLength({ max: 150 })
    .withMessage('Text must be under 150 characters'),
];

module.exports = validateMessage;
