const express = require('express');
const drinks = require('../data_array/alcohol');
const router = express.Router();
const Drink = require('../models/drinkModel')

router.get('/', async (req, res) => {
    const drinks = await Drink.find({})
    res.json(drinks)
});

router.get('/:id', (req, res) => {
    const drink = drinks.find((p) => p._id === req.params._id)
    res.json(drink)
});

module.exports = router;
