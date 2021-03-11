const express = require('express');
const app = express();
const dotenv = require('dotenv');
// const drinks = require('./data_array/alcohol');
const connectionDB = require('./config/db');
const PORT = process.env.PORT || 3001

const drinkRoutes = require('./routes/drinkRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
app.listen(PORT, console.log(`Express server running on port ${PORT}`));

connectionDB();

app.use(express.json())

// Primary Routes

app.get('/' , (req, res) => {
    res.send("Hello I am running express server.")
});

app.use('/drinks', drinkRoutes)
app.use('/users', userRoutes)

