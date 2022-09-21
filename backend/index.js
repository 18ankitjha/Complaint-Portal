const express=require('express');
// const cors=require('cors');
const connectToMongo = require('./db');
const app=express();
connectToMongo();
const port=5000;
require('dotenv').config();
app.use(express.json())

app.use('/api/user',require('./routes/user'))

app.listen(port, () => {
    console.log(`Notebook listening on port ${port}`)
  })
  