var mysql = require('mysql');



module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: 'a527dfc2f10324ccca0b3507a4abf40d-1065712748.ap-south-1.elb.amazonaws.com',
            user: 'root',
            password: 'Root@123',
            database: 'pharmacy'
        });

	connection.on('error', function(err) {
	  console.log(err.code);
	});

        connection.connect(function(err){
            if(err)
            {
                console.log('error connecting database ...');
            }
        });
        if(param == null)
        {
            connection.query(sql, function(err, result){
                callback(result);
            });
        }
        else
        {
            connection.query(sql, param, function(err,result){
                callback(result);
            });
        }
    }
};



