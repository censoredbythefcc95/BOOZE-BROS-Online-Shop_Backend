const mongoose = require("mongoose")
const dotenv = require("dotenv")
const customers = require("./data_array/customers")
const drinks = require("./data_array/alcohol")
const Customer = require("./models/customerModel")
const Drink = require("./models/drinkModel")
const newOrder = require("./models/newOrderModel")
const connectionDB = require("./config/db")

dotenv.config()

connectionDB()

const importData = async () => {
    try {
        await newOrder.deleteMany()
        await Drink.deleteMany()
        await Customer.deleteMany()

       const madeUsers =  await Customer.insertMany(customers)
       const adminUser = madeUsers[0]._id
       const sampleDrinks = drinks.map(drink => {
           return { ...drink, user: adminUser}
       })

       await Drink.insertMany(sampleDrinks)
       console.log("Data Imported")
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await newOrder.deleteMany()
        await Drink.deleteMany()
        await Customer.deleteMany()

       console.log("Data Destroyed")
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d' ) {
    destroyData()
} else {
    importData()
}
