var db = require('./db');

module.exports ={
	
	getAllDomains:function(callback){
		var sql = "select * from domain";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},

	getById: function(id, callback){
		var sql = "select * from domain where id=?";
		db.getResult(sql, [id], function(result){
			if(result){
				callback(result);
			}else{
				callback(null);
			}
		});
	},

	addDoamin: function(domain, callback){
		var sql = "insert into domain values(?,?)";
		db.execute(sql, [null, domain.name], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},

	getAllDomains:function(callback){
		var sql = "select * from domain";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},

}