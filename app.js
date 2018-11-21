const Joi =  require('joi');
const express= require('express');
const app= express();
app.use(express.json())
const body=require('body-parser').json()
const parcels=[{
	id: 1,
	parcelName: 'Tshirts',
	from: 'Kigali',
	to: 'Musanze',
	weight: 4
				},
	{id: 2,
	parcelName: 'Laptop',
	from: 'Kigali',
	to: 'Musanze',
	weight: 2
			},
	{
	id: 3,
	parcelName: 'Water boxes',
	from: 'Huye',
	to: 'Rulindo',
	weight: 15
	}]

/*app.get('/', (req, res)=>{
	res.send("Hello world!!!!!");
});*/
app.get('/api/v1/parcels', (req, res)=>{
	res.send(parcels);
});
app.get('/api/v1/parcels/:id', (req, res)=>{
	id = req.params.id;
 	const parcel= parcels.find(c => c.id === parseInt(id));
 	if(!parcel) res.status(404).send("The parcel you are requesting does not exist");
 	res.send(parcel);
});


app.post('/api/v1/parcels', body,  (req , res)=>{
	const schema= {
		parcelName: Joi.string().required(),
		from: Joi.string().required(),
		to: Joi.string().required(),
		weight: Joi.number().required(),
	};
	const result =Joi.validate(req.body,schema);
	console.log(result);

	if(result.error){
		res.status(400).send(result.error);
		return;
	}

	const parcel= {
		id: parcels.length+1,
		parcelName: req.body.parcelName,
		from: req.body.from,
		to:req.body.to,
		weight: req.body.weight

	};
	parcels.push(parcel);
	res.status(201).send(parcel);
});

const port= process.env.PORT || 3000
app.listen(port, () => console.log("Listening on port $(port)"));