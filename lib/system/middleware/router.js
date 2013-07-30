var router = 
	{createAccount:function (req,res,next) {
		console.log('createAccount called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},confirmAccount:function (req,res,next) {
		console.log('confirmAccount called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},login:function (req,res,next) {
		console.log('login called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},availableAccounts:function (req,res,next) {
		console.log('availableAccounts called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},getPermissions:function (req,res,next) {
		console.log('availableAccounts called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},getModel:function (req,res,next) {
		console.log('getModel called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},find:function (req,res,next) {
		console.log('find called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},getAll:function (req,res,next) {
		console.log('getAll called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},getItemById:function (req,res,next) {
		console.log('getItemById called .... Helloss');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},createItem:function (req,res,next) {
		console.log('createItem called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},updateItem:function (req,res,next) {
		console.log('updateItem called');
		req.urlChecked = true;
		
		//code here updates request with operation object
		
		next();	
	},deleteItem:function (req,res,next) {
		console.log('deleteItem called');
		req.urlChecked = true;

		//code here updates request with operation object
		
		next();	
	},check:function (req,res,next) {
	
		console.log('check called');
		if (!req.urlChecked)
			next('Path not valid');	
		else
			next();
	}
	
}

module.exports = router;