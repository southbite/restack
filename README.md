restack
=======

NB: WE HAVE MOVED TO https://github.com/NodeCPT/restack
=======================================================

NOTE: This solution is not completed yet, we have only built the tests and stubb code.

Restful JSON API built on top of Node and Express, with built-in ORM, account management and caching

![Request flow](https://github.com/southbite/restack/blob/master/doc/stack-flow.jpg?raw=true)

To run the tests, download the project, in the root folder of the project run: node test/restack_test

To run the restack server, create a file and execute using node:

```
	restack = require('./lib/restack');
	
	restack.initialize({}, function(e){
	  
		if (!e)
		{
			restack.start(function(e){
				if (e)
					console.log('restack failed to start: ' + e);
				else
					console.log('restack started successfully');
			});
		}
		else
			console.log('restack failed to initialize: ' + e);
		
	});
```



