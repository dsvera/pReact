const express = require('express');
const router = express.Router();

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, rest) => {
    PostsModel.find((err, docs) => {
        if (!err) rest.send(docs);
        else console.log("error to get date:" + err);
    });
});

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log("error creating new data :" + err);
    })
});

module.exports = router