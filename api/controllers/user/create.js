module.exports = {

   friendlyName: 'Create user',

   description: 'Create user description',

   inputs: {
      name: {
         description: 'The name of the user.',
         type: 'string',
         required: true
      },
			city: {
         description: 'The city of the user.',
         type: 'string'
      },
      email: {
         description: 'The email of the user.',
         type: 'string'
      },
      password: {
        description: 'The password of the user.',
        type: 'string'
      }
   },

   exits: {
      success: {
        responseType: ""
      },
      notFound: {
         description: 'Could not create user.'
      }
   },

   fn: function (inputs, exits, env) {
      User.create(inputs).exec(function (err) {
         if (err) {return exits.error(err);}
         return exits.success(inputs);
      });
   }
};
