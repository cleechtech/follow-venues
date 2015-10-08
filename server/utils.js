var bcrypt = require('bcrypt'),
	jwt = require('jsonwebtoken'),
	q = require('q');

// helper function for hashing users' passwords
module.exports = function(app){
	return {
		comparePwd: function(password, hash){
			var dfd = q.defer();

			bcrypt.compare(password, hash, function(err, isMatch){
				if(err) dfd.reject(err);

				dfd.resolve(isMatch);
			});

			return dfd.promise;
		},
		hashPwd: function(password){
			var dfd = q.defer();
			bcrypt.genSalt(10, function(err, salt) {
				if(err) dfd.reject(err);

			    bcrypt.hash(password, salt, function(err, hash) {
			    	if(err) dfd.reject(err);

			    	dfd.resolve(hash);
			    });
			});

			return dfd.promise;
		},
		// authentication middleware
		authenticate: function(req, res, next){
		  var token = req.body.token || req.query.token || req.headers['x-access-token'];

		  if (token) {

		  	// verify token validity
		    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
		      if (err) {
		        return res.json({ success: false, message: 'Failed to authenticate token.' });    
		      } else {
		        req.decoded = decoded;    
		        next();
		      }
		    });

		  } else {

		    return res.status(403).send({ 
		        success: false, 
		        message: 'No token provided.' 
		    });
		    
		  }
		}
	};
};

