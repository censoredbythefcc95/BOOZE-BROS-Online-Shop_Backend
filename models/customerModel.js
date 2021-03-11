const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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

customerSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const Customer = mongoose.model("Customer", customerSchema)

module.exports = Customer;