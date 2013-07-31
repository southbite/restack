var routes = [ 'createAccount', 'confirmAccount', 'login', 'availableAccounts', 'getPermissions', 
                    'getModel', 'find', 'getAll', 'getItemById', 'createItem', 'updateItem', 'deleteItem' ];

var router = {	
	check:function (req,res,next) {
		console.log('check called');
		next(req.operation ? null : 'Path not valid');
	}	
}

routes.forEach(function(route) {
	router[route] = function(req, res, next) {
		console.log(route);
		req.operation = req.operation || { name:route };
		next();
	};
});

module.exports = router;