const express =  require('express');

const bycrpt = require('bcrypt');

const User= require('../models/user');

const router= express.Router();


// register the routes

router.post("/signup", (req, res, next) => {

  // create a new user and store in the database  - first create a mongoose model
  // In backend/route/models     - add user.js
  bycrypt.hash(req.body.password)
  .then(hash => {

    const user = new User({
      email: req.body.email,
      password: hash
    });
    user.save()
    .then(result => {
      res.status(201).json({
        message: 'User created',
        result:result
      });
    })
    .catch(err => {
      res.status(500).json({
        error:err
      })
    })
  })




});


// to make sure we have api in front of this route go to app.js  -there

// implement userRoutes at the top -  const userRoutes= require('./routes/user') to import

// still in app.js at the  bottom do app.use("api/user",  userRoutes);




// exports

module.exports= router;



