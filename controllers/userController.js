const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Customer = require('../models/customerModel');

const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await Customer.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        const { _id, name, email, adminPrivilege } = user;
        res.json({
            _id,
            name,
            email,
            adminPrivilege,
            token: null
        });
    } else if (user) {
        res.send('Invalid email or password')
    } else {
        res.send('Invalid email or password')
    }
})

module.exports = authUser;