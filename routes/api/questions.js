const express = require('express');
const router = express.Router();

//Question Model
const Question = require('../../models/Question');

// @route GET api/questions
// @desc Get All questions
// @access Public
router.get('/', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
});

// @route POST api/questions/add
// @desc Create A Question
// @access Public
router.post('/add', (req, res) => {
    const newQuestion = new Question({
        name: req.body.name
    });

    newQuestion.save().then(question => res.json(question));
});

// @route GET api/questions/id
// @desc Get A Question
// @access Public
router.get('/:id', (req, res) => {
    const id = req.body.id;
    const getQuestion = Question.find(r => r.id === parseInt(id))
    res.json(getQuestion);
});

module.exports = router;