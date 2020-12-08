const User = require('../models/user');

module.exports = {
	async indexAll(req, res) {
		const users = await User.find({deletedAt: null}).sort('-createdAt');
		return res.json(users);
	},
	
	async index(req, res) {
		if (!req.params.id) {
			res.status(400).send({ error: 'É obrigatório ser enviado o id do usuário.' });
			return;
		}
		const user = await User.findById(req.params.id);
		return res.json(user);
	},

	async store(req, res) {
		const { name, bornDate, gender, uf } = req.body;
		if (!name || !bornDate || !gender || !uf) {
			res.status(400).send({ error: 'É necessário enviar todos os dados.' });
			return;
		}
		const user = await User.create(req.body);
		return res.json(user);
	},

	async update(req, res) {
		if (!req.params.id) {
			res.status(400).send({ error: 'É obrigatório ser enviado o id do usuário.' });
			return;
		}
		const user = await User.findById(req.params.id);
		user.set(req.body);
		await user.save();
		return res.json(user);
	},

	async delete(req, res) {
		if (!req.params.id) {
			res.status(400).send({ error: 'É obrigatório ser enviado o id do usuário.' });
			return;
		}
		const user = await User.findById(req.params.id);
		user.set({deletedAt: new Date()});
		await user.save();
		return res.json(user);
	}
};