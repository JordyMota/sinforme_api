const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    bornDate: Date,
    gender: String,
    uf: String,
    createdAt: {
    	type: Date,
    	default: Date.now
    },
    deletedAt: {
    	type: Date,
    	default: null
    }
});

module.exports = mongoose.model('user', userSchema);