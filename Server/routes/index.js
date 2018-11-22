import {Router} from 'express'
import parcelRouters from './parcels'
import userRouters from './users'

const allRouters = Router()


allRouters.use(parcelRouters, userRouters)

export default allRouters