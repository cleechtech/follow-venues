var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// email, pwd are required
// email must be unique
// don't send password with requests

var userSchema = new Schema({
	firstName: {type: String },
	lastName: {type: String },
	email: {type: String, required: true, unique: true },
	password: {type: String, required: true, select: false },
	admin: Boolean,
	created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
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

module.exports = mongoose.model('User', userSchema);