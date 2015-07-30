var mongoose = require('mongoose');

var schema = new mongoose.Schema({	
									name: 'string', image: 'string',
									price: 'number', description: 'string',
									shortdescription: 'string', company: 'string',
									category: 'string',
									availability: 'string' });
var store_model = mongoose.model('store_products', schema);
module.exports = store_model; 