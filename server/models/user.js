var mongoose = require('mongoose');

// email, pwd are required
// email must be unique
// don't send password with requests

var userSchema = new mongoose.Schema({
	firstName: {type: String },
	lastName: {type: String },
	email: {type: String, required: true, unique: true },
	password: {type: String, required: true, select: false },
	admin: Boolean,
	created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now},
    follows: [ {type: mongoose.Schema.ObjectId, ref: 'Venue'} ]
});

// Sets the created_at parameter equal to the current time
userSchema.pre('save', function(next){
    var now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now;
    }
    next();
});

// http://stackoverflow.com/questions/29504278/using-pull-in-mongoose-model
userSchema.static('follow', function follow(userId, venueId, token, cb) {
  var User = this;

  // make sure token is valid
  // ...

  return User.findOneAndUpdate({_id: userId }, {$push: {follows: venueId}}, {new: true}).exec(cb);
});

// userSchema.static('unfollow', function unfollow(token, id, cb) {
//   var User = this;

//   // Returns a promise in Mongoose 4.X
//   // or call cb if provided
//   return User.findOneAndUpdate({token: token}, {$pull: {follows: {user: id}}}, {new: true}).exec(cb);
// });

module.exports = mongoose.model('User', userSchema);