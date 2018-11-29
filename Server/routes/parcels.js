import { Router } from 'express';
import Parcel from '../controllers/parcels';

const routers = Router();

routers.get('/parcels', Parcel.allParcels);
routers.post('/parcels', Parcel.create);
routers.get('/parcels/:id', Parcel.getParcebyId);
routers.put('/parcels/:id', Parcel.canceParcel);
export default routers;
