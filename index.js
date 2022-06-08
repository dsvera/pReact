const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');
//const mongoose = require('mongoose');

//mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
//on donne l'acces a tout le monde avec le paquer cors 
// Sinon on doit mettre app.use(cors({origin: 'https://nanaplouf.fr'}))
app.use(cors());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));