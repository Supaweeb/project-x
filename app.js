require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Initial project for deploy');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
