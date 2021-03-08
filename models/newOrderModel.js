const mongoose = require("mongoose");

const newOrderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
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
                    type: String
                    required: true
                },
                drink: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
            }
        ]
    }
)