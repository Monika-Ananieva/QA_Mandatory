const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuestionSchema = new Schema ({
    name: {
        type: String,
        required: true
    }
});

module.exports = Question = mongoose.model('question', QuestionSchema);