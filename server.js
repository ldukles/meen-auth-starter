// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();

// LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})