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
	static getParcebyId(req, res){
		const parcel = parcels.find(item=>item.id === parseInt(req.params.id, 10))
		res.json(parcel)
	}
	static canceParcel(req, res){
		const parcel= parcels.find(item=>item.id === parseInt(req.params.id, 10))
		let index = parcels.indexOf(parcel)
		const updatedParcel= parcels[index] ={...parcel, ...req.body}
		res.json(updatedParcel)
	}

}