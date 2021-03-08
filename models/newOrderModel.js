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
        // payment information schema
        customerPayment: {
            type: String,
            required: true
        },
        customerPaymentResult: {
            id: {
                type: String
            },
            status: {
                type: String
            },
            time: {
                type: String
            },
            email_address: {
                type: String
            }
        },
        // price information and boolean for order pick-up.
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0
        },
        servicePrice: {
            type: Number,
            required: true,
            default: 0.0
        },
        grandTotalPrice: {
            type: Number,
            required: true,
            default: 0.0
        },
        paidStatus: {
            type: Boolean,
            required: true,
            default: true
        },
        paidOn: {
            type: Date
        },
        isPickedUp: {
            type: Boolean,
            required: true,
            default: false
        },
        pickedUpDate: {
            type: Date
        }
    }
)

const newOrder = mongoose.model("newOrder", newOrderSchema)

module.exports = newOrder;