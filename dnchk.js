const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Root@123",
    database: 'pharmacy'
});

// Define a function that executes a query and returns the results
module.exports = {
  getData: function(sql, param, callback) {
    connection.query(sql, param, function(err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};