var mysql = require('mysql');

var con = mysql.createConnection({
  host: "a9d573bba79b3468a9eb6b6e2af99012-2076130203.ap-south-1.elb.amazonaws.com",
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
