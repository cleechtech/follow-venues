var Venue = require('../models/venue'),
	User = require('../models/user');

module.exports = {
	all: function(req, res, next){
		Venue.find({}, function(err, venues){
			res.json(venues);
		});
	},
	add: function(req, res, next){
		var _newVenue = new Venue({
			name: req.body.name,
			location: [req.body.longitude, req.body.latitude]
		});

		newVenue.save(function(err){
			if(err) throw err;

			// send token
			res.json({
				success: true,
				message: 'Successfully added!',
				venue: _newVenue
			});
		});
	},
	fetchOne: function(req, res, next){
		var _venueName = req.params.name;

		Venue.findOne({ name: _venueName })
			.exec(function(err, venue){
				res.json(venue);
			});
	},
	follow: function(req, res, next){
		var _userId = req.body.userId,
			_venueId = req.body.venueId,
			_token = req.body.token;

		User.follow(_userId, _venueId, _token, function(err, updatedUser){
			 if (err) throw err;

			res.json({
				success: true,
				message: 'Followed!',
				user: updatedUser
			});
		});

	}
}