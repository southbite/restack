/*
 * Packages the operation response
 */

var response = function (err, req, res, next) {

	console.log('response middleware called');

	var payload = (req.operation && req.operation.payload) ? req.operation.payload : null;
	var message	= (req.operation && req.operation.message) ? req.operation.message : null;

	restack.inputOutputPlugin.formatResponse(err, payload, message, req,  res, next);

	//next();
}

module.exports = response;