import {Router} from 'express'
import User from '../controllers/users'
console.log(User)
const routers = Router()

routers.get('/users', User.allUsers)
routers.post('/users', User.create)
routers.get('/users/:id', User.getUserbyId)
export default routers