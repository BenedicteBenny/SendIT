import users from '../models/users'
export default class User {
	static allUsers(req, res){
		res.json({users})
	}
	static create (req, res){
		const newuser={
			id: users.length,
			...req.body
		}
		users.push(newuser)
		res.json(users[users.length-1])
	}
	static getUserbyId(req,res){
		const user= users.find(item=>item.id===parseInt(req.params.id, 10))
		res.json(user)
	}
}