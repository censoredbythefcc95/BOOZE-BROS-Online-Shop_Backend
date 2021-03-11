const express = require('express');
const router = express.Router();
const { authCustomer } = require("../controllers/userController");


router.post("/userlogin", authCustomer)

module.exports = router;
