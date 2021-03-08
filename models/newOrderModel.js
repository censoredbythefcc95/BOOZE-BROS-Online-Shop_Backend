const mongoose = require("mongoose");

const newOrderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Customer"
        },
        orderDrinks: [
            {
                name: {
                    type: String,
                    required: true
                },
                qty: {
                    type: Number,
                    required: true
                },
                image: {
                    type: String,
                    required: true
                },
                drink: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "Drink"
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ],
        address: {
            main_address: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            zipCode: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        },
    }
)