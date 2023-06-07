const express = require('express');
const PORT = 8000;

const app = express();

app.listen(PORT);

app.get('/', (req, res) => {
 res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
 res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
 res.sendFile('./views/contact-me.html', { root: __dirname });
});