const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const VoteSchema = new Schema({
    ref_id:{
        type: String,
        required: true
    }
});

module.exports = Vote = mongoose.model('vote', VoteSchema);