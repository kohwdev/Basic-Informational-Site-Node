const express = require('express');
const PORT = 8000;

const app = express();

//Listen for requests
app.listen(PORT);


//Send html files to requests
app.get('/', (req, res) => {
 res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
 res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/contact-me', (req, res) => {
 res.sendFile('./views/contact-me.html', { root: __dirname });
});

//redirects
app.get('/about-us', (req, res) => {
 res.redirect('/about');
})

//404 page
app.use((req, res) => {
 res.status(404).sendFile('./views/404.html', { root: __dirname })
})