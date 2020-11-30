const User = require('../models/info');

module.exports = {
	async indexAll(req, res) {
		const users = await User.find({deletedAt: null}).sort('-createdAt');
		return res.json(users);
    },

	async indexPriority(req, res) {
		const users = await User.find({deletedAt: null, priority: true}).sort('-createdAt');
		return res.json(users);
    },
    
	async index(req, res) {
		const user = await User.findById(req.params.id);
		return res.json(users);
	},

	async store(req, res) {
		const user = await User.create(req.body);
		return res.json(user);
	},

	async update(req, res) {
		const user = await User.findById(req.params.id);
		user.set(req.body);
		await user.save();
		return res.json(user);
	},

	async delete(req, res) {
		const user = await User.findById(req.params.id);
		user.set({deletedAt: new Date()});
		await user.save();
		return res.json(user);
	}
};