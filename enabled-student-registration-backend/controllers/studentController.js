const { ref, push } = require('firebase/database');
const { validationResult } = require('express-validator');
const db = require('../config/firebase');
const sendEmail = require('../services/mailService');
const generateID = require('../utils/generateID');
const registrationTemplate = require('../email_template/registrationTemplate');

exports.registerStudent = async (req, res, next) => {
  // Validate inputs from express-validator middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, className } = req.body;
  const registrationId = generateID();

  try {
    // Save data to Firebase Realtime Database
    await push(ref(db, 'students'), {
      name,
      email,
      className,
      registrationId,
      createdAt: new Date().toISOString()
    });

    // Prepare styled HTML email content
    const htmlContent = registrationTemplate({ name, regId: registrationId, className });

    // Send confirmation email
    await sendEmail(
      email,
      `Registration Confirmation - Student ID #${registrationId}`,
      htmlContent
    );

    return res.status(200).json({ message: 'Registration successful. Confirmation email sent.', registrationId });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
