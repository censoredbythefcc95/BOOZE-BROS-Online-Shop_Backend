const express = require('express');
const app = express();
const dotenv = require('dotenv');
const drinks = require('./data_array/alcohol');
const connectionDB = require('./config/db');
const PORT = process.env.PORT || 3001

dotenv.config();
app.listen(PORT, console.log(`Express server running on port ${PORT}`));

connectionDB();

// Primary Routes

app.get('/' , (req, res) => {
    res.send("Hello I am running express server.")
});

app.get('/drinks', (req, res) => {
    res.json(drinks)
});

app.get('/drinks/:id', (req, res) => {
    const drink = drinks.find((p) => p._id === req.params.id)
    res.json(drink)
});