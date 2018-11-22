import {Router} from 'express'
import User from '../controllers/users'
console.log(User)
const routers = Router()

routers.get('/users', User.allUsers)

export default routers