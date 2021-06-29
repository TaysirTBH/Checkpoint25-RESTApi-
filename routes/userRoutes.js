const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/getusers', (req, res) => {
  User
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err.message));
});

// Add new user to the database
router.post('/addUser', (req, res) => {
  const newUser = req.body;
    User
    .create(newUser)
    .then(() => res.send('user register'))
    .catch((err) => res.status(400).json(err.message));
});

// update user
router.put('/updateuser/:id', (req, res) => {
  const updateData = req.body;
  User
    .findByIdAndUpdate(req.params.id, updateData)
    .then((data) => res.json(`user is updated ${data}`))
    .catch((err) => res.status(400).json(err.message));
});

// delete user
router.delete('/deleteuser/id', (req, res) => {
  User
    .findByIdAndDelete(req.params.id)
    .then((data) => res.json('user is deleted'))
    .catch((err) => res.status(400).json(err.message));
});


module.exports = router;
