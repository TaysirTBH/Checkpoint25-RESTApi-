const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fname: String,
    lname: {
      required: [true, 'you have to add your last name !!'],
      type: String,
    },
    age: {
      type: Number,
      required: [true, 'you have to add your age !!'],
    },
    email: {
      type: String,
      required: [true, 'you have to add your email !!'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'you have to add a password !!'],
    },
  });
const user = mongoose.model('user', User);
module.exports = user;