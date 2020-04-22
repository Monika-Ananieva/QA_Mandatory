const express = require('express');
const router = express.Router();

//Answer Model
const Answer = require('../../models/Answer');

// @route GET api/answers
// @desc Get All answers
// @access Public
router.get('/', (req, res) => {
    Answer.find()
        .then(answers => res.json(answers))
});

// @route POST api/answers/add
// @desc Create An Answer
// @access Public
router.post('/add', (req, res) => {
    const newAnswer = new Answer({
        answer: req.body.answer,
        ref_id: req.body.ref_id
    });

    newAnswer.save().then(answer => res.json(answer));
});

// @route GET api/answers/id
// @desc Get An Answer
// @access Public
router.get('/:id', (req, res) => {
    const id = req.body.id;
    const getAnswer = Answer.find(r => r.ref_id === parseInt(id))
    res.json(getAnswer);
});

module.exports = router;