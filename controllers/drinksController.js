const expressAsyncHandler = require('express-async-handler');
const Drink = require('../models/drinkModel');

const getDrinks = expressAsyncHandler(async (req, res) => {
    const drinks = await Drink.find({})

    res.json(drinks)
})

const getDrinkById = expressAsyncHandler(async (req, res) => {
    const drink = await Drink.findById(req.params.id)

    if (drink) {
        res.json(drink)
    } else {
        res.status(404)
        throw new Error("Drink not found...")
    }
})

module.exports = { getDrinks, getDrinkById } 