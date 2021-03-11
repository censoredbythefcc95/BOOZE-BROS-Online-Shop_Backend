const expressAsyncHandler = require('express-async-handler');
const Customer = require('../models/customerModel');

const authCustomer = expressAsyncHandler(async (req, res) => {
   const { email, password } = req.body

    const customer = await Customer.findOne({ email})

    if(user) {
        
    }
})

module.exports = { authCustomer }