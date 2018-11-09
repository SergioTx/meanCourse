const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    // no CORS protection
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requesteed-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [{
        id: '1fghdfhdfghdfgh',
        title: 'First server-side post',
        content: 'This is coming from the server'
    }, {
        id: '2alsdjfasñdlf',
        title: 'Second server-side post',
        content: 'This is coming from the server!'
    }];
    res.status(200)
        .json({
            message: 'Posts fetched successfully!',
            posts: posts
        });
});

module.exports = app;