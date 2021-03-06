const express = require('express');
const app = express();

app.listen(3000, console.log('Server is running on port 3000'));

// Primary Routes

app.get('/' , (req, res) => {
    res.send("Hello I am running express server.")
});

app.get('/drinks', (req, res) => {
    res.send('This is drinks page.')
});