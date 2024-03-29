var mysql = require('mysql');

var con = mysql.createConnection({
  host: "a527dfc2f10324ccca0b3507a4abf40d-1065712748.ap-south-1.elb.amazonaws.com",
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
