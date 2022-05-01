const express = require('express');
const mongoose = require("mongoose");
const Joi = require('joi');
const dotenv = require("dotenv");
Joi.objectId = require('joi-objectid')(Joi)
const users = require('./routes/users')
const auth = require('./routes/auth')
dotenv.config();

mongoose.connect(process.env['DATABASE'])
.then(()=>console.log("connected to mongo db..."))
.catch((err)=>console.log("Cannot connect to mongodb...", err)); 

const app = express();
app.use(express.json());

app.use("/api/users", users);
app.use('/login', auth)


const port = process.env.PORT || 5000;
app.listen(5000, () => console.log("Listening on port 3000..."))
