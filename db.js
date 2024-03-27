var mysql = require('mysql');



module.exports = {
    getData: function(sql, param, callback){
        var connection = mysql.createConnection({
            host: 'a9d573bba79b3468a9eb6b6e2af99012-2076130203.ap-south-1.elb.amazonaws.com',
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



