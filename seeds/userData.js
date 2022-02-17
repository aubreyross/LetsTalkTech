const { User } = require('../models');

const userContent = 
[
  {
    name: "Caroline",
    email: "caroline@gmail.com",
    password: "password1"
  },
  {
    name: "Blake",
    email: "blake@gmail.com",
    password: "password2"
  },
  {
    name: "Billy",
    email: "billy@gmail.com",
    password: "password3"
  }
]

const userSeeded = () => User.bulkCreate(userContent);

module.exports = userSeeded;