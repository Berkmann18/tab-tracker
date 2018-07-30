'use strict';

const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const ONE_WEEK = 3600 * 24 * 7;
const jwtSignUser = (user) => {
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
};

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body);

      const usr = user.toJSON();
      res.send({
        user: usr,
        token: jwtSignUser(usr)
      })
    } catch (err) {
      res.status(400).send({
        error: 'User account already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        email
        // password
      });
      const validPwd = await user.comparePassword(password);
      if (!user || !validPwd) {
        // noinspection ExceptionCaughtLocallyJS
          throw 'incorrect' //should now lead to the catch block
      }
      const usr = user.toJSON();
      res.send({
        user: usr,
        token: jwtSignUser(usr)
      })
    } catch (err) {
      res.status(403).send({
        error: 'Incorrect login information.'
      })
    }
  }
};