var Venue = require('../models/venue');

module.exports = {
	all: function(req, res, next){
		Venue.find({}, function(err, venues){
			res.json(venues);
		});
	},
	add: function(req, res, next){
		var newVenue = new Venue({
			name: req.body.name,
			location: [req.body.longitude, req.body.latitude]
		});

		newVenue.save(function(err){
			if(err) throw err;

			// send token
			res.json({
				success: true,
				message: 'Successfully added!',
				venue: newVenue
			});
		});
	}
}