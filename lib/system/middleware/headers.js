/*
// Class doesn't seem to be used anywhere
var headers = function (req,res,next) {


	res.setHeader("X-Powered-By","nodejs");
	res.setHeader("Access-Control-Allow-Origin",req.headers['host']);
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");

	next();
}

module.exports = headers;
*/