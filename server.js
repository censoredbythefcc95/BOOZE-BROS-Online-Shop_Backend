const express = require('express');
const app = express();
const dotenv = require('dotenv');
// const drinks = require('./data_array/alcohol');
const connectionDB = require('./config/db');
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser');

const drinkRoutes = require('./routes/drinkRoutes');
const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
app.listen(PORT, console.log(`Express server running on port ${PORT}`));

connectionDB();

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    // res.header("Access-Control-Allow-Credentials: true") 
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    // res.header("Access-Control-Max-Age", "1000")
    if (req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }
    next()
})

// app.use(express.json())

// Primary Routes

app.get('/' , (req, res) => {
    res.send("Hello I am running express server.")
});

app.use('/drinks', drinkRoutes)
app.use('/users', userRoutes)

app.post('/test', (req,res) => {
    res.json(req.body);
})
