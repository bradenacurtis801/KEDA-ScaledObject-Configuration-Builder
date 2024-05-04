const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const FRONTEND_SERVER_PORT = 5500;

app.use(cors()); // Enable CORS for all routes

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // Make sure to store your static files under a 'public' directory

// Route to serve the home.html file
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html')); // Ensure this is the correct path to your index.html
});

// API endpoint to serve options.json
app.get('/options', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'options.json')); // Make sure your options.json is stored in the 'public' directory
});

app.listen(FRONTEND_SERVER_PORT, () => {
    console.log(`Server started on port ${FRONTEND_SERVER_PORT}`);
});
