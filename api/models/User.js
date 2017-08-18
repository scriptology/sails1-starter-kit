/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    email: { type: 'string', required: true, unique: true },
    name: { type: 'string', required: true },
    city: { type: 'string' },
    password: {
      type: 'string',
      minLength: 6,
      required: true
    }
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          user.password = hash;
          cb();
        }
      });
    });
  }

};
