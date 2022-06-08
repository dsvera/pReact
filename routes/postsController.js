const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId

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

router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    )
});

router.delete("/:id", (req, res) => {
    // si tu ne trouve pas envoi un mess d'erreur
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknow : " + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error :" + err)
        }
    );
});



module.exports = router