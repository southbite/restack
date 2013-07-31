var service = function (req,res,next) {

	console.log('service called');
	next();	
}

module.exports = service;