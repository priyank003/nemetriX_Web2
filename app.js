const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const flash = require('flash');
const port = process.env.PORT || 3001;
require('dotenv').config();

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/login');
let authRouter = require('./routes/auth');

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
app.use('/auth', authRouter);

app.listen(port, function (){
    console.log("Listening on PORT" + port);
})

module.exports = app;
module.exports = db;