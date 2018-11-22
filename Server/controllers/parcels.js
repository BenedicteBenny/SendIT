import parcels from '../models/parcels'
export default class Parcels {
	static allParcels(req, res){
		res.json({parcels})
	}
	
	static create(req, res){
		//console.log(req.body);
		const newparcel= {
			id:parcels.length,
			...req.body
		}
		parcels.push(newparcel)
		res.json(parcels[parcels.length-1])
	}

}