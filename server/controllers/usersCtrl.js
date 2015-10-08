var User = require('../models/user');

module.exports = {
	all: function(req, res){
		User.find({}, function(err, users){
			res.json(users);
		});
	}
};