var mongoose = require('mongoose');

var venueSchema = new mongoose.Schema({
	name: { type: String, required: true },
	location: { type: [Number], required: true }, // [Long, Lat]
	created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    followers: [{ type: mongoose.Schema.ObjectId, ref: "User" }]
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
// allows MongoDB to run geospatial queries
venueSchema.index({location: '2dsphere'});

venueSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

module.exports = mongoose.model('Venue', venueSchema);