const Info = require('../models/info');

module.exports = {
	async indexAll(req, res) {
		const infos = await Info.find({deletedAt: null}).sort('-createdAt');
		return res.json(infos.map(item => {
			const { priority, _id, title, shortDescript } = item;
			return {
				priority,
				_id,
				title,
				shortDescript
			}
		}));
    },

	async indexPriority(req, res) {
		const infos = await Info.find({deletedAt: null, priority: true}).sort('-createdAt');
		return res.json(infos.map(item => {
			const { priority, _id, title, shortDescript } = item;
			return {
				priority,
				_id,
				title,
				shortDescript
			}
		}));
    },
    
	async index(req, res) {
		if (!req.params.id) {
			res.status(400).send({ error: 'É obrigatório ser enviado o id da informação.' });
			return;
		}
		const selectedInfo = await Info.findById(req.params.id);
		return res.json(selectedInfo);
	},

	async store(req, res) {
		const { title, descript, shortDescript } = req.body;
		if (!title || !descript || !shortDescript) {
			res.status(400).send({ error: 'É necessário enviar todos os dados obrigatórios.' });
			return;
		}
		const selectedInfo = await Info.create(req.body);
		return res.json(selectedInfo);
	},

	async update(req, res) {
		if (!req.params.id) {
			res.status(400).send({ error: 'É obrigatório ser enviado o id da informação.' });
			return;
		}
		const selectedInfo = await Info.findById(req.params.id);
		selectedInfo.set(req.body);
		await selectedInfo.save();
		return res.json(selectedInfo);
	},

	async delete(req, res) {
		if (!req.params.id) {
			res.status(400).send({ error: 'É obrigatório ser enviado o id da informação.' });
			return;
		}
		const selectedInfo = await Info.findById(req.params.id);
		selectedInfo.set({deletedAt: new Date()});
		await selectedInfo.save();
		return res.json(selectedInfo);
	}
};