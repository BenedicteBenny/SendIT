import Joi from 'joi';
import users from '../models/users';
const pg = require('../database/user');
const jwt = require('jsonwebtoken');
class User {
  async allUsers(req, res) {
    try {
      // const userId = req.userId;
      const { rows: users } = await pg.query('SELECT * from users');
      return res.json({
        success: true,
        users
      });
    } catch (e) {
      res.status(500).send({
        success: false,
        error: e.message || 'Internat database error'
      });
    }
  }

  async login(req, res) {
    const { body } = req;
    const schema = {
      email: Joi.string().required(),
      password: Joi.string().required()
    };

    const output = Joi.validate(body, schema);

    if (output.error) {
      return res.status(400).send({
        message: 'Invalid input, Please fill all the fields',
        error: output.error
      });
    }

    const {
      rows: [user]
    } = await pg.query(`SELECT * from users where email='${body.email}' `);
    const JWT_SECRET = process.env.JWT_SECRET;

    if (user && user.email && user.password === body.password) {
      const token = jwt.sign({ user_id: user.user_id }, JWT_SECRET, {
        expiresIn: '1h'
      });

      user.password = '';
      return res.header('X-Auth-Token', token).send({
        success: true,
        user
      });
    }
    return res.status(401).send({
      success: false,
      message: 'Email or password incorrect'
    });
  }

  async create(req, res) {
    const { body } = req;
    const schema = {
      userName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    };
    const output = Joi.validate(body, schema);
    if (output.error) {
      return res.status(400).send({
        message: 'Invalid input, Please fill all the fields',
        error: output.error
      });
    }
    try {
      const {
        rows: [user]
      } = await pg.query(
        `INSERT INTO users(username, email, password) VALUES('${
          body.userName
        }','${body.email}','${body.password}') RETURNING user_id`
      );
      return res.status(201).json({
        success: true,
        userId: user.user_id
      });
    } catch (e) {
      return res.status(500).send({
        success: false,
        message: e.message || 'Internal database error'
      });
    }
  }

  async getUserbyId(req, res) {
    const { id } = req.params;
    try {
      const {
        rows: [user]
      } = await pg.query(`SELECT * FROM users WHERE user_id ='${id}'`);
      return res.json({
        success: true,
        user
      });
    } catch (e) {
      return res.status(500).send({
        success: false,
        message: e.message || 'Error occured while getting user by id'
      });
    }

    // const user = users.find(item => item.id === parseInt(req.params.id, 10));
    // !user
    //   ? res.status(404).send('The user the ID entered is not found')
    //   : res.json(user);
  }
}

export default new User();
