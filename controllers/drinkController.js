const express = require('express');
const drinks = require('../data_array/alcohol');
const router = express.Router();
const expressAsyncHandler = require('express-async-handler');
// I found this npm tool that handles async errors automaticially.
// It handles async errors without having to wrap each route in try {} ..
const Drink = require('../models/drinkModel')

router.get('/', expressAsyncHandler(async (req, res) => {
    const drinks = await Drink.find({})
    res.json(drinks)
})); //to use async handler you have to wrap the route in the handler function like this.

router.get('/:id', async (req, res) => {
    const drink = await Drink.findById(req.params.id)

    if(drink) {
        res.json(drink)
    } else {
        res.status(404).json({ message: 'Drink not found.'})
    }
   
});

module.exports = router;
