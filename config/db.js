import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        
        console.log(`MDB has connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`ERROR - ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectionDB;