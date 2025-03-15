const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/mycoolapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Socket.io setup for real-time communication
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start server
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});