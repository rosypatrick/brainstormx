require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const emailStorage = require('./services/emailStorage');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Mock API Services (Phase 1)
const mockServices = require('./services/mockServices');
app.use('/services', mockServices);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Email signup endpoint
app.post('/api/signup', (req, res) => {
  const { email } = req.body;
  
  // Simulate processing time for realism
  setTimeout(() => {
    // Save email to file-based storage
    const result = emailStorage.addEmail(email);
    
    // Return response based on storage result
    res.status(result.success ? 200 : 500).json({
      success: result.success,
      message: result.message
    });
  }, 800); // Realistic latency as per task rules (500ms-1.5s)
});

// Admin endpoint to view all emails (protected in production)
app.get('/api/admin/emails', (req, res) => {
  // In production, this should be protected with authentication
  const emails = emailStorage.getEmails();
  res.json({ emails });
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`BrAInstormX server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the application`);
});
