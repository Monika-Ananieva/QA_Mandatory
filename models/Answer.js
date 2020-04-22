const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AnswerSchema = new Schema ({
    answer: {
        type: String,
        required: true
    },
    ref_id: {
        type: String,
        required: true
    }
});

module.exports = Answer = mongoose.model('answer', AnswerSchema);