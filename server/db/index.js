var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var con = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "chat"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports.connection = con;

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


