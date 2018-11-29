import Joi from 'joi';
import users from '../models/users';

class User {
  allUsers(req, res) {
    return res.send({
      users,
    });
  }

  create(req, res) {
    const schema = {
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    };
    const output = Joi.validate(req.body, schema);
    if (output.error) {
      res.status(400).send('Invalid input. Please fill all fields');
      return;
    }
    const newuser = {
      id: users.length,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    users.push(newuser);
    res.send(users);
  }

  getUserbyId(req, res) {
    const user = users.find(item => item.id === parseInt(req.params.id, 10));
    !user
      ? res.status(404).send('The user the ID entered is not found')
      : res.send(user);
  }
}

export default new User();
