var restack = {
	schema:null,
	settings:null,
	cachePlugin:null,
	dataPlugin:null,
	authPlugin:null,
	sessionPlugin:null,
	port:null,
	express:null,
	http:null,
	middleware:{
		authentication:null,
		cache:null,
		service:null,
		data:null,
		headers:null,
		router:null,
		session:null,
	},
	initialize:function(params, done){
		
		try
		{
			
			if (params.settings != null)
				this.settings = params.settings;
			
			if (this.settings == null)
				this.settings = require('./system/config/dev');
			
			this.schema = require('./system/schema/base_schema');
			
			
			if (this.port == null)
				this.port = this.settings.port;
			
			if (this.settings.plugins.cache.plugin != null)
				this.cachePlugin = this.settings.plugins.cache.plugin;
			else
			{
				this.cachePlugin = require('./system/plugins/restack_cache');
			}
				
			
			if (this.settings.plugins.data.plugin != null)
				this.dataPlugin =  this.settings.plugins.data.plugin;
			else
			{
				this.dataPlugin = require('./system/plugins/restack_data');
			}
				
			
			if (this.settings.plugins.authentication.plugin != null)
				this.authPlugin =  this.settings.plugins.authentication.plugin;
			else
			{
				this.authPlugin = require('./system/plugins/restack_auth');
			}
			
			if (this.settings.plugins.session.plugin != null)
				this.sessionPlugin =  this.settings.plugins.session.plugin;
			else
			{
				this.sessionPlugin = require('./system/plugins/restack_session');
			}
				
			
			if (this.settings.middleware.authentication != null)
				this.middleware.authentication =  this.settings.middleware.authentication;
			else
				this.middleware.authentication = require('./system/middleware/authentication');
			
			if (this.settings.middleware.cache != null)
				this.middleware.cache =  this.settings.middleware.cache;
			else
				this.middleware.cache = require('./system/middleware/cache');
			
			if (this.settings.middleware.data != null)
				this.middleware.data  =  this.settings.middleware.data;
			else
				this.middleware.data  = require('./system/middleware/data');
			
			this.middleware.router  = this.settings.middleware.router || require('./system/middleware/router');
			this.middleware.service = this.settings.middleware.service || require('./system/middleware/service');
			
			if (this.settings.middleware.session != null)
				this.middleware.session =  this.settings.middleware.session;
			else
				this.middleware.session = require('./system/middleware/session');
			
			if (this.settings.middleware.response != null)
				this.middleware.response =  this.settings.middleware.response;
			else
				this.middleware.response = require('./system/middleware/response');
			
			this.cachePlugin.initialize(this.settings.plugins.cache.settings, function(e){
				
				if (!e)
					this.authPlugin.initialize(this.settings.plugins.authentication.settings, function(e){
						
						if (!e)
							this.dataPlugin.initialize(this.settings.plugins.data.settings, function(e){
								
								if (!e)
									this.sessionPlugin.initialize(this.settings.plugins.session.settings, function(e){
										
										if (!e)
										{
											if (this.settings.application_schema)
											{
												this.schema.addExternal(this.settings.application_schema, function(e){
													done(e);
												});
											}
											else
												done();
										}
										else
											done('Failed initializing session plugin: ' + e);
										
									}.bind(this));
								else
									done('Failed initializing data plugin: ' + e);
								
							}.bind(this));
						else
							done('Failed initializing authentication plugin: ' + e);
						
					}.bind(this));
				else
					done('Failed initializing cache plugin: ' + e);
				
			}.bind(this));
			
			
		}
		catch(e)
		{
			done(e);
		}
		
	},
	start:function(done){
		
		try
		{
			this.express = require('express');
			this.http = require('http');
			
			var app = this.express()
			.use(this.express.logger())
			.use(this.express.json())
			.use(this.express.cookieParser())
			.post('/auth/create_account',this.middleware.router.createAccount)
			.post('/auth/confirm_account',this.middleware.router.confirmAccount)
			.post('/auth/login',this.middleware.router.login)
			.get('/auth/available_accounts',this.middleware.router.availableAccounts)
			.get('/auth/permissions/:type',this.middleware.router.getPermissions)
			.get('/:type/model', this.middleware.router.getModel)
			.post('/:type/find', this.middleware.router.find)
			.get('/:type', this.middleware.router.getAll)
			.get('/:type/:id', this.middleware.router.getItemById)
			.post('/:type', this.middleware.router.createItem)
			.put('/:type', this.middleware.router.updateItem)
			.delete('/:type/:id', this.middleware.router.deleteItem)
			.use(this.middleware.router.check)
			.use(this.middleware.session)
			.use(this.middleware.authentication)
			.use(this.middleware.cache.check)
			.use(this.middleware.service)
			.use(this.middleware.cache.update)
			.use(this.middleware.response);

			this.http.createServer(app).listen(this.port);

			console.log('server listening on port ' + this.port);
			done();
		}
		catch(e)
		{
			done(e);
		}
		
		
	}
}

module.exports = restack;