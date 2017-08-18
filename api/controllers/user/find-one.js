module.exports = {

   friendlyName: 'Welcome user',

   description: 'Look up the specified user and welcome them, or redirect to a signup page if no user was found.',

   inputs: {
      id: {
         description: 'The ID of the user to look up.',
         // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
         // if the `userId` parameter is not a number.
         type: 'number',
         // By making the `userId` parameter required, Sails will automatically respond with
         // `res.badRequest` if it's left out.
         required: true
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
      User.findOne(inputs.id).exec(function (err, user) {
         if (err) {return exits.error(err);}
         if (!user) {return exits.notFound('Not found');}

         return exits.success({id: user.id, name: user.name});
      });
   }
};
