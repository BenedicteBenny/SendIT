import { Router } from 'express';
import User from '../controllers/users';
const { accessControl } = require('../middlewares/security');
// console.log(User)
const routers = Router();

routers.get('/users', accessControl, User.allUsers);
routers.post('/login', User.login);
routers.post('/sign_up', User.create);
routers.get('/users/:id', User.getUserbyId);

export default routers;
