restack = require('../lib/restack');

var expect = require('expect.js');

describe('data-tests', function() {

    before(function(callback) {
        restack.initialize({}, callback);
    });

    describe('test-create', function() {

        it('should create object of User', function(callback) {

            var user = {
                emailaddress: 'test@example.com',
                password: 'whatevs',
                firstname: 'name',
                lastname: 'surname'
            };

            var result = restack.dataPlugin.create('User', user, function(err, newObj) {

                expect(err).to.be(null);

                expect(newObj).to.be.ok();
                expect(newObj.emailaddress).to.be('test@example.com');
                expect(newObj.password).to.be('whatevs');
                expect(newObj.firstname).to.be('name');
                expect(newObj.lastname).to.be('surname');

                expect(newObj).to.have.property('id');
                expect(newObj).to.have.property('owner');
                expect(newObj).to.have.property('lastUpdatedBy');
                expect(newObj).to.have.property('created');
                expect(newObj).to.have.property('deleted');
                expect(newObj).to.have.property('accountId');

                callback();
            });

            expect(result).to.be(undefined);
        });

    });

    describe('test-findOne', function() {

        it('should findOne object of User', function (callback) {

            callback('not implemented');

        });
    });

});