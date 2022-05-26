// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
// configure database
const mongoose = require('mongoose');
// configure express sessions
const session = require('express-session');

// database configuration
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
// configure express sessions
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }));

// Routes / Controllers
const userController = require('./controllers/users');
app.use('/users', userController);
// sessions controller
const sessionsController = require('./controllers/sessions');
app.use('/sessions', sessionsController);


// LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})