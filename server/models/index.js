var db = require('../db');
var connection = db.connection;


module.exports = {
  messages: {
    get: function (callback) {
     var getMessageQuery = 'select * from messages';

      connection.query(getMessageQuery,(err, result) =>{
       if (err) {
         callback(err);
       } else {
         callback(err, result);
       }
      });
    }, // a function which produces all the messages
    //this one retrieves all the messages from the database





    post: function (message, callback) {


     var writeMessageQuery = 'INSERT INTO message (userid, text, roomname) values ((SELECT userid FROM users WHERE username = "' + message.username + '"), "' + message.text + '", "' + message.roomname + '")';

     connection.query(writeMessageQuery,(err, result) =>{
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
     });




    } // a function which can be used to insert a message into the database


    // INSERT INTO table_listnames (name, address, tele)
    // SELECT * FROM (SELECT 'Rupert', 'Somewhere', '022') AS tmp
    // WHERE NOT EXISTS (
    //     SELECT name FROM table_listnames WHERE name = 'Rupert'
    // ) LIMIT 1;

    // CREATE TABLE messages (

    //   id integer primary key, userid text, text text, roomname text, foreign key (userid) references users (id)
    // );






  },

  users: {
    // Ditto as above.
    get: function (params, callback) {
      var query = 'SELECT * FROM messages WHERE userid = (SELECT id FROM users WHERE username = "' + username + '")';
    },
//params = ['David']
    post: function (params, callback) {
      var userQuery = 'INSERT INTO users (username) VALUES (?)';

      connection.query(userQuery, params, (err, result) =>{
        if (err) {
          callback(err);
        } else {
          callback(err, result);
        }
       });
    }
  }
};



//creates an object which has a connection to the mysql database
//use the .query() method to execute mysql commands
//example:
// con.query("CREATE DATABASE mydb", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");

//example to create a table:
//var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

