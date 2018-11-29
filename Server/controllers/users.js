import Joi from 'joi';
import users from '../models/users';

class User {
  allUsers(req, res) {
    return res.status(200).json({
      users
    });
  }

  create(req, res) {
    const schema = {
      userName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    };
    const output = Joi.validate(req.body, schema);
    if (output.error) {
      return res.status(400).send('Invalid input, Please fill all the fields');
    }

    const newUser = {
      id: users.length + 1,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    };
    users.push(newUser);
    res.status(201).json(users[users.length - 1]);
  }

  getUserbyId(req, res) {
    const user = users.find(item => item.id === parseInt(req.params.id, 10));
    !user
      ? res.status(404).send('The user the ID entered is not found')
      : res.json(user);
  }
}

export default new User();
