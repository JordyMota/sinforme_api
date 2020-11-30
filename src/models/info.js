const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
    title: String,
    descript: String,
    priority: {
        type: Boolean,
        default: false,
    },
    createdAt: {
    	type: Date,
    	default: Date.now
    },
    deletedAt: {
    	type: Date,
    	default: null
    }
});

module.exports = mongoose.model('info', infoSchema);