import users from '../models/users';
const isEmpty = require('lodash.isempty');
const utils =  require('../utils');


class User {
	allUsers(req, res){
		return res.json({
			success: true, 
			users
		});
	}

	create (req, res){
		const { body } = req;
		const errors = utils.validateUser(body);
		
		if(!isEmpty(errors)) {
			return res.status(400).send({
				success:false,
				message: "Bad request, user data might have some errors",
				errors
			});
		}

		const newuser={
			id: users.length,
			...body
		};

		users.push(newuser)
		
		return res.json({
			success: true, 
			userId: Array.isArray(users) && users.length
		});
	}

	getUserbyId(req,res){

		const { id } = req.params;
		const errors = utils.validateUserId(id);
		if(!isEmpty(errors)) return res.status(400).send({
			success:false,
			message: "Bad request, user data might have some errors",
			errors
		});

		const user = users.find(item=>item.id === parseInt(id, 10));

		if(!isEmpty(user)) {
			return res.json({
				success: true,
				user
			})
		}

		return res.status(404).send({
			success: false,
			message: "User doesn't exist"
		})
	}
}


export default new User();