const express = require('express');
const mongoose = require('mongoose');

const questions = require('./routes/api/questions');
const answers = require('./routes/api/answers');
const votes = require('./routes/api/votes');

const app = express();
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/questions', questions);
app.use('/api/answers', answers);
app.use('/api/votes', votes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));