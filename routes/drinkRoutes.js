const express = require('express');
const router = express.Router();
const { getDrinks, getDrinkById } = require("../controllers/drinksController");

// /drinks
// /drinks/:drinkId

router.route("/").get(getDrinks)
router.route("/:id").get(getDrinkById)

module.exports = router;
