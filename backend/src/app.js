const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

var user = 'admin';
var pass = 'dontcopythisone';
const connectionUrl = `mongodb+srv://${user}:${pass}@cluster0-ejmso.mongodb.net/test?retryWrites=true`;

console.log(connectionUrl);
mongoose.connect(connectionUrl, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database!')
    })
    .catch(() => {
        console.log('Connection failed!');
    });

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
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
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