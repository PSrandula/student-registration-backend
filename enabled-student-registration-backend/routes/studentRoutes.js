const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { registerStudent } = require('../controllers/studentController');

router.post(
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('className').trim().notEmpty().withMessage('Class name is required'),
  ],
  registerStudent
);

module.exports = router;
