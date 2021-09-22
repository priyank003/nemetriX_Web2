const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

mongoose.connect('mongodb://localhost:27017/placement');
const db = mongoose.connection;

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/ab', indexRouter);
app.use('/', usersRouter);

app.listen(port, function (){
    console.log("Listening on PORT" + port);
})

module.exports = app;
module.exports = db;