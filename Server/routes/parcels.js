import {Router} from 'express'
import Parcel from '../controllers/parcels'
const routers = Router()

routers.get('/parcels', Parcel.allParcels)
routers.post('/parcels', Parcel.create)

export default routers