'use strict';

const bcrypt = require('bcrypt');

const SALT_FACTOR = 8;

const hashPwd = (user, opts) => {
  if (!user.changed('password')) return;

  return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => user.setDataValue('password', hash))
};

module.exports = (sequelize, DataTypes) => {
  const User =  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
  }, {
    hooks: {
      beforeSave: hashPwd //or beforeCreate + beforeUpdate (all 3 together might cause a double hash bug)
    }
  });

  User.prototype.comparePassword = function(pwd) {
    return bcrypt.compare(pwd, this.password)
  };

  return User
};