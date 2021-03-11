const expressAsyncHandler = require('express-async-handler');
const Customer = require('../models/customerModel');

const authCustomer = expressAsyncHandler(async (req, res) => {
   const { email, password } = req.body

res.send({ email, password })
})

module.exports = { authCustomer }