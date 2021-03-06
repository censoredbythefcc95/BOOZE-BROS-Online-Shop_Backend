const express = require('express');
const app = express();
const drinks = require('./data_array/alcohol');

app.listen(3000, console.log('Server is running on port 3000'));

// Primary Routes

app.get('/' , (req, res) => {
    res.send("Hello I am running express server.")
});

app.get('/drinks', (req, res) => {
    res.json(drinks)
});

app.get('/drinks/:id', (req, res) => {
    const drink = drinks.find(p => p._id === req.params.id)
    res.json(drink)
});