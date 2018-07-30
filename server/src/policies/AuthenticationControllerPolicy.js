'use strict';
const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(/'^[a-zA-Z0-9]{8,32}$/)
    };

    const {error, value} = Joi.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          });
          break;
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:<br>
                1. It must contain ONLY the following characters: a-z, A-Z, 0-9<br>
                2. It must be in between 8 and 32 characters in length
            `
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else next()
  }
};