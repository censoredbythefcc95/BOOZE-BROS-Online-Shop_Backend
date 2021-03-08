const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        adminPrivilege: {
            type: Boolean,
            required: true,
            default: false
        }
    }
)

const Customer = mongoose.model("Customer", customerSchema)

module.exports = Customer;