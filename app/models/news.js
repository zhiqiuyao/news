var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// news schema

var NewsSchema = new Schema({
	title: String,
	author: String,
	content: String
});

module.exports = mongoose.model('News', NewsSchema);