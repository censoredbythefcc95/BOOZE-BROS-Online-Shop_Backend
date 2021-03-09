const mongoose = require("mongoose");

const customerReviewSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comments: {
            type: String,
            required: true
        }
    }
)

const drinkSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Customer"
        },
        name: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        reviews: [customerReviewSchema],
        numReviews: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0
        }
    }
)


const Drink = mongoose.model("Drink", drinkSchema)

module.exports = Drink;