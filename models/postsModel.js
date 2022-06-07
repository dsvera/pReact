const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    //nom de la base de donnée
    "node-api",
    // on déclare l'interieur de la table
    {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    //la nom de la table
    "posts"
);


module.exports = { PostsModel };