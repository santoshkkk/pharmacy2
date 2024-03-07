var mysql = require('mysql');

var con = mysql.createConnection({
  host: "a05491ae9c15e46229bba0450d258dcc-700465491.us-west-2.elb.amazonaws.com",
  user: "root",
  password: "Root@123",
  database: 'pharmacy',
  port: 3306, // Specify the port number here (default is 3306 for MySQL)
  connectionLimit: 10, // Adjust the connection pool size as needed
});

con.on('error', function(err) {
  console.log(err.code);
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM batch", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
