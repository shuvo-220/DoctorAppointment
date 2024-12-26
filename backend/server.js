const express = require('express');
const dotenv = require('dotenv');
dotenv.config({});
const app = express();
const database = require('./db/database');

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`)
})