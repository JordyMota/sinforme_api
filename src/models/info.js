const mongoose = require('mongoose');
const Mixed = mongoose.Schema.Types.Mixed;

const linksSchema = new mongoose.Schema({
    infoId: Mixed,
    title: String,
    shortDescript: String
});

const infoSchema = new mongoose.Schema({
    title: String,
    descript: String,
    shortDescript: String,
    category: {
        type: String,
        default: null
    },
    steps: {
        type: [String],
        default: []
    },
    images: {
        type: [String],
        default: []
    },
    links: {
        type: [linksSchema],
        default: []
    },
    priority: {
        type: Boolean,
        default: false
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