const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve the index.html on root request
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});