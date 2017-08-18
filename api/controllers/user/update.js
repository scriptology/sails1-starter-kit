module.exports = {

   friendlyName: 'Update user',

   description: 'Update user description',

   inputs: {
      id: {
         description: 'The ID of the user to look up.',
         type: 'number',
         required: true
      },
      city: {
         description: 'The city of the user to look up.',
         type: 'string',
      },
      email: {
         description: 'The email of the user to look up.',
         type: 'string',
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
      User.update({id: inputs.id}, inputs).exec(function (err) {
         if (err) {return exits.error(err);}
         return exits.success(inputs);
      });
   }
};
