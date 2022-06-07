const mongoose = require('mongoose');


mongoose.connect(
    "mongodb+srv://nanaplouf:nanaplouf18@cluster0.vls8ojq.mongodb.net/node-api",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)