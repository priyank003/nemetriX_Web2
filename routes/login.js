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
      password: String
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

module.exports = router;
