const express = require('express');
const app = express();
require( 'dotenv' ).config();
require('./helpers/init_mongodb');
app.get('/', (req,res) => {
    res.send('Hello World. Backend is connected.')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => err ? console.log(err) : console.log('Plus Ultra') )