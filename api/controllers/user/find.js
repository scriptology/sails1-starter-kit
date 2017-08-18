module.exports = {

   friendlyName: 'Welcome user',

   description: 'Look up the specified user and welcome them, or redirect to a signup page if no user was found.',

   inputs: {
      q: {
         description: 'The text to look up.',
         type: 'string'
      }
   },

   exits: {
      success: {
        responseType: ""
      },
      notFound: {
         description: 'No user with the specified ID was found in the database.',
         statusCode: 404
      }
   },

   fn: function (inputs, exits, env) {
      User.find().exec(function (err, users) {
         if (err) {return exits.error(err);}
         return exits.success(users);
      });
   }
};
