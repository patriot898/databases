var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    //this one retrieves all the messages from the database
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

