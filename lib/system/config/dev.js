var config = {
	port:7777,
	plugins:{
		cachePlugin:{plugin:require('../plugins/restack_cache'),settings:{
			
		}},
		dataPlugin:{plugin:require('../plugins/restack_data'),settings:{
			
		}},
		authPlugin:{plugin:require('../plugins/restack_auth'),settings:{
			
		}},
		sessionPlugin:{plugin:require('../plugins/restack_session'),settings:{

		}},
		inputOutputPlugin:{plugin:require('../plugins/restack_input_output_formatter'),settings:{

		}}
	},
	middleware:{
		authentication:require('../middleware/authentication'),
		cache:require('../middleware/cache'),
		data:require('../middleware/data'),
		response:require('../middleware/response'),
		router:require('../middleware/router'),
		session:require('../middleware/session')
	}
}

module.exports = config;