const { v4: uuidv4 } = require('uuid');

module.exports = () => {
  // Generate a unique ID, prefix with SR- and use first 6 chars uppercase
  return 'SR-' + uuidv4().slice(0, 6).toUpperCase();
};
