const express = require('express');
const router = express.Router();

//Vote Model
const Vote = require('../../models/Vote');

// @route GET api/votes
// @desc Get All votes
// @access Public
router.get('/', (req, res) => {
    Vote.find()
        .then(votes => res.json(votes))
});

// @route POST api/votes/add
// @desc Create A Vote
// @access Public
router.post('/add', (req, res) => {
    const newVote = new Vote({
        ref_id: req.body.ref_id
    });

    newVote.save().then(vote => res.json(vote));
});

// @route GET api/votes/id
// @desc Get A Vote
// @access Public
router.get('/:id', (req, res) => {
    const id = req.body.id;
    const Vote = Vote.find(r => r.ref_id === parseInt(id));
    res.json(Vote);
});

module.exports = router;