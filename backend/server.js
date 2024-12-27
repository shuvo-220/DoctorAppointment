const express = require('express');
const dotenv = require('dotenv');
dotenv.config({});
const app = express();
const database = require('./db/database');
const userRoute = require('./routes/userRoute');

const PORT = process.env.PORT

app.use(express.json());
app.use('/api/user', userRoute);

app.listen(PORT, ()=>{
    console.log(`server running on port:${PORT}`)
})