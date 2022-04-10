const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//API Routes
app.use('/api/v1', require('./routes/contactsV1Routes'))
app.use('/api/v2', require('./routes/contactsV2Routes'))


//Connection with DB
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then((res) => {
        console.log("Connected with MongoDB ");
    })
    .catch((err) => {
        console.log("Error in with MongoDB ", err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Noogle-Contacts started');
});