var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;
var ObjectID = require('mongodb').ObjectID;


var data_helper = {
	internals:{
	},
	connected:false,
	initialize:function(params, done)
	{
		//done('Not implemented');
		done();
	},
	getType:function(type, done){
		done('Not implemented');
	},
	find:function(type, criteria, done)
	{
		done('Not implemented');
	},
	findIn:function(type, columnName, matchValues, done)
	{
		done('Not implemented');
	},
	findOne:function(type, criteria, done)
	{
    var self=this;

    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
      if(err) done(err);

      var collection = db.collection(type);
      var idString = criteria.id;
      collection.findOne({_id: ObjectID(idString)}, function(err, result) {
        console.log('found result for id: '+idString);
        done(err, self.transform(result));
      });  // ok
    });
	},
  transform:function(mongoObject) {
    var transformed = mongoObject;
    transformed.id = mongoObject._id.toString();
    delete transformed._id;
    return transformed;
  },
	getById:function(type, id, done)
	{
    console.log('get by id!');
		done('Not implemented');
	},
	getAll:function(type, done)
	{
		done('Not implemented');
	},
	create:function(type, obj, done) {

    var self=this;

    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {

      if(err) throw done(err);

      var collection = db.collection(type);
      collection.insert(obj, function(err, result) {
        done(err, self.transform(result[0]));
      });
    });
	},
	update_criteria:function(type, criteria, obj, done) {
		done('Not implemented');
	},
	update:function(id, type, obj, done) {
		done('Not implemented');
	},
	destroy:function(type, id, done) {
		done('Not implemented');
	}
}

module.exports = data_helper;