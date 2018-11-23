// import joi from 'joi'
const express = require('express');
const routers = require('./routes');
const bodyParser = require('body-parser');
const app= express();


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use('/api/v1/', routers);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = server;