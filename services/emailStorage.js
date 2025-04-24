/**
 * Email Storage Service
 * Simple file-based storage for email signups
 */

const fs = require('fs');
const path = require('path');

// Path to the data file
const DATA_FILE = path.join(__dirname, '..', 'data', 'email-signups.json');

// Initialize the data file if it doesn't exist
function initializeDataFile() {
  try {
    if (!fs.existsSync(path.dirname(DATA_FILE))) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    }
    
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify({ emails: [] }, null, 2));
      console.log('Email storage file created successfully');
    }
  } catch (error) {
    console.error('Error initializing data file:', error);
  }
}

// Get all stored emails
function getEmails() {
  try {
    initializeDataFile();
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data).emails;
  } catch (error) {
    console.error('Error reading emails:', error);
    return [];
  }
}

// Add a new email to storage
function addEmail(email) {
  try {
    initializeDataFile();
    
    // Read current data
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    
    // Check if email already exists
    if (data.emails.includes(email)) {
      return {
        success: true,
        message: "You're already on our waitlist! We'll be in touch soon.",
        isNew: false
      };
    }
    
    // Add new email with timestamp
    data.emails.push(email);
    
    // Save updated data
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    
    console.log(`New signup saved: ${email}`);
    return {
      success: true,
      message: "Thanks for signing up! We'll be in touch soon.",
      isNew: true
    };
  } catch (error) {
    console.error('Error saving email:', error);
    return {
      success: false,
      message: "There was an error saving your email. Please try again.",
      error: error.message
    };
  }
}

// Initialize on module load
initializeDataFile();

module.exports = {
  getEmails,
  addEmail
};