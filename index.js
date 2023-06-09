require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Initial project for deploy');
});

app.get('/vote', (req, res) => {
    res.send('Vote GET api');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
