// import joi from 'joi'
import express from 'express';
import allRouters from './routes';
import bodyParser from 'body-parser';
const app= express();


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use('/api/v1/', allRouters);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = server;