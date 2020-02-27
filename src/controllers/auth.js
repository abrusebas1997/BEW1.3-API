const express = require('express');
const User = require('../models/user.js');
const router = express.Router(); // eslint-disable-line new-cap
const jwt = require('jsonwebtoken');

// TODO: Add routes.

// SIGN UP POST
router.post("/sign-up", (req, res) => {
  // Create User
  const user = new User(req.body);

  user
    .save()
    .then(user => {
        res.json({"Sign-up": "Success", "User": user})
    })
    .catch(err => {
        res.json({"Sign-up": "failed", "err": err.message})
    });
});

// LOGOUT
   app.get('/logout', (req, res) => {
       res.clearCookie('nToken');
       res.redirect('/');
   });
// LOGIN
router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Find this user name
    User.findOne({ username }, "username password")
      .then(user => {
        if (!user) {
          // User not found
          return res.status(401).send({ message: "Wrong Username or Password" });
        }
        // Check the password
        user.comparePassword(password, (err, isMatch) => {
          if (!isMatch) {
            // Password does not match
            return res.status(401).send({ message: "Wrong Username or password" });
          }
          // Create a token
          const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, {
            expiresIn: "60 days"
          });


          // Set a cookie and redirect to root
          res.cookie("nToken", token, { maxAge: 700000, httpOnly: true });
          res.redirect("/");
        });
      })
      .catch(err => {

        console.log(err);
      });
  });


module.exports = router;
