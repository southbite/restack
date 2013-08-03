module.exports = {
	internals : {
		standardHeaders : []
	},
	initialize:function(params, done){
		done();
	},
	formatResponse : function(err, payload, message, req, res, next){

		var status	= 'OK';

		if (err) {
			status	= "FAILED";
			message	= err.toString();
		}

		res.setHeader("X-Powered-By","restackJS");
		res.setHeader("Access-Control-Allow-Origin", req.headers['host']);
		res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
		res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");

		res.send({status:status, message:message, data:payload}) ;

		next();
	}
};