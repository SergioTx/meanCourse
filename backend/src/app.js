const express = require('express');

const app = express();

// no CORS protection
app.use((req, res, next) => {
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

app.use('/api/posts', (req, res, next) => {
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
            message: 'Posts fetched succesfully!',
            posts: posts
        });
});

module.exports = app;