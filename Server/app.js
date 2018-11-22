import joi from 'joi'
import express from 'express'

import routers from './routes'
const app= express();
app.use(express.json())
const body=require('body-parser').json()

/*app.get('/', (req, res)=>{
	res.send("Hello world!!!!!");
});*/
// app.get('/api/v1/parcels', (req, res)=>{
// 	res.send(parcels);
// });
// app.get('/api/v1/parcels/:id', (req, res)=>{
// 	id = req.params.id;
//  	const parcel= parcels.find(c => c.id === parseInt(id));
//  	if(!parcel) res.status(404).send("The parcel you are requesting does not exist");
//  	res.send(parcel);
// });


// app.post('/api/v1/parcels', body,  (req , res)=>{
// 	const schema1= {
// 		parcelName: Joi.string().required()
// 	};
// 	const result1 =Joi.validate(req.body,schema1);

// 	const schema2= {
// 		from: Joi.string().required()
// 	};
// 	const result2 =Joi.validate(req.body,schema2);

// 	const schema3= {
// 		to: Joi.string().required()
// 	};
// 	const result3 =Joi.validate(req.body,schema3);

// 	const schema4= {
// 		weight: Joi.number().required(),
// 	};
// 	const result4 =Joi.validate(req.body,schema4);

// 	if(result1.error || result2.error || result3.error || result4.error){
// 		res.status(400).send(result1.error);
// 		res.status(400).send(result2.error);
// 		res.status(400).send(result3.error);
// 		res.status(400).send(result4.error);
// 		return;
// 	}


// 	const parcel= {
// 		id: parcels.length+1,
// 		parcelName: req.body.parcelName,
// 		from: req.body.from,
// 		to:req.body.to,
// 		weight: req.body.weight

// 	};
// 	parcels.push(parcel);
// 	res.status(201).send(parcel);
// });
app.use('/api/v1/', routers)
const port= process.env.PORT || 3000
	app.listen(port, () => console.log(`Listening on port ${port}`));