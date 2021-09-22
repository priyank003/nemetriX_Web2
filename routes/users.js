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
  users.find({username: email, password: password}, function (err, data){
    if (data.length === 0){
      res.status(400).json({error: err});
    } else{
      res.status(200).json({data: data, err: err});
    }
  });
});

module.exports = router;
