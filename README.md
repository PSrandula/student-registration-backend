# 🎓 Student Registration Backend

This project is a Node.js backend system built to handle student registrations with:

- 🔥 Firebase Realtime Database integration
- 📧 Automated confirmation emails using NodeMailer
- ✅ Input validation and error handling
- 🧩 Modular code structure

---

## 🚀 Features

- Registers students with name, email, and class
- Stores student data in Firebase
- Generates unique registration ID
- Sends styled HTML confirmation email with student details
- Validates inputs and handles errors gracefully

---

## 📦 Technologies Used

- Node.js + Express.js
- Firebase Realtime Database
- NodeMailer (Gmail)
- UUID
- dotenv
- express-validator

---

## 📁 Folder Structure

enabled-student-registration-backend/
├── app.js
├── .env
├── package.json
├── README.md
├── config/
│ └── firebase.js
├── controllers/
│ └── studentController.js
├── routes/
│ └── studentRoutes.js
├── services/
│ └── mailService.js
├── utils/
│ └── generateID.js
└── email_template/
└── registrationTemplate.js


---

## 📮 API Endpoint

**POST** `/api/register`

**Request Body:**

{
  "name": "Pasindu Randula",
  "email": "pasindu@example.com",
  "className": "Web Development"
}

---

## Success Response:

{
  "message": "Registration successful. Confirmation email sent.",
  "registrationId": "SR-XXXXXX"
}

## Setup Instructions
Clone the repository:

git clone https://github.com/yourusername/student-registration-backend.git
cd student-registration-backend

Install dependencies:

npm install

Create a .env file and configure:
makefile

PORT=5000
EMAIL_USER=your_gmail@example.com
EMAIL_PASS=your_app_password

FIREBASE_API_KEY=...
FIREBASE_DATABASE_URL=...
...

Start the server:

npm start

Lets go!
