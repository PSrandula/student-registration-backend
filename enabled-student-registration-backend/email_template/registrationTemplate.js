module.exports = ({ name, regId, className }) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #4CAF50;">🎓 Registration Confirmation</h2>
    <p><strong>Student Name:</strong> ${name}</p>
    <p><strong>Registration ID:</strong> ${regId}</p>
    <p><strong>Class Name:</strong> ${className}</p>
    <br />
    <p>Thank you for registering with <strong>DETZ Global Pvt Ltd</strong>.</p>
    <p>We look forward to seeing you in class!</p>
  </div>
`;
