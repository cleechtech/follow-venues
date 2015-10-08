var Venue = require('../models/venue');

module.exports = {
	all: function(req, res, next){
		Venue.find({}, function(err, venues){
			res.json(venues);
		});
	},
	add: function(req, res, next){
		var newVenue = new User({
			name: req.body.name,
			location: req.body.location
		});

		newVenue.save(function(err){
			if(err) throw err;

			// send token
			res.json({
				success: true,
				message: 'Successfully added !',
				token: token,
				user: newUser
			});
		});
	}
}