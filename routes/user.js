/**
 * User Authentication Router
 */
const express = require('express');
const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const router = express.Router();

/**
 * Creating collection object
 */
let schema = new Schema(
    {
      email: String,
      username: String,
      password: String,
      firstname: String,
      lastname: String,
      year: String,
      branch: String,
      registration: String,
    },
    {
      collection: 'users'
    });

users = mongoose.model('users', schema);


/**
 *Validating login
 */
router.post('/login/', function(req, res) {
  let email = req.body.email;
  let password = req.body.password;
  console.log(req.body)
  users.find({email: email, password: password}, function (err, data ){
    if (data.length === 0){
      res.status(200).json({message: "Error"});
    } else{
      if (email === "admin"){
          res.status(200).json({username: data.username, message: "Admin"});
      } else {
          res.status(200).json({username: data.username, message: "Success"});
      }
    }
  });
});

router.post('/signup/', function(req, res) {
    console.log(req.body);
    let data = {
        username: req.body.username,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        password: req.body.password,
        year: req.body.year,
        branch: req.body.branch,
        email: req.body.email,
        registration: req.body.registration
    };
    let userData = new users(data);
    userData.save(function (err) {
        if (err) {
            res.status(400).json({message: "Error"});
            console.log(err);
        } else {
            res.status(200).json({message: "Success", username: req.body.username});
        }
    });
});

router.get('/info/', function (req, res){
    console.log(req.body);
    users.find({username: req.body.username}, function (err, data) {
        if (data.length === 0) {
            res.status(200).json({message: "Error"});
        } else {
            req.status(200).json({
                message: "Success",
                username: data.username,
                lastname: data.lastname,
                firstname: data.firstname,
                email: data.email,
                year: data.year,
                branch: data.branch,
                registration: data.registration,
            })
        }
    });
});
module.exports = router;
