import joi from 'joi'
import express from 'express'
import routers from './routes'
const app= express();
app.use(express.json())
const body=require('body-parser').json()
app.use('/api/v1/', routers)
const port= process.env.PORT || 3000
	app.listen(port, () => console.log(`Listening on port ${port}`));