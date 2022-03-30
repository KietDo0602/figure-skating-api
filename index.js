const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose');
const skatersRoutes = require('./routes/skaters.js');
const pairsRoutes = require('./routes/pairs.js');


const app = express();
app.use(bodyParser.json());
const PORT = 5001;

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true })

const db = mongoose.connection;
db.once('open', () => {
    console.log('db connected');
})

app.get("/", (req, res) => res.send("Welcome to the Figure Skating API!"));

// Relevant routes

app.use('/skaters', skatersRoutes);
app.use('/pairs', pairsRoutes);




app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));