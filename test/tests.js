var process = require('node-data-preprocessing'),
	network = require('../network/network'),
	chai = require('chai'),
	should = chai.should();
describe('Coursework', function() {
	describe('#network', function() {
		describe('#creation', function() {
			it('should create the network correctly', function() {
				var net = network.create();
				net.getLayer(0).should.be.length(8);
				net.getLayer(1).should.be.length(8);
				net.getLayer(2).should.be.length(1);
			});
		});
		describe('training', function() {
			describe('#train', function() {

			});
		});
		describe('testing', function() {
			describe('#solve', function() {

			});	
		});
	});
	describe('#multipleSimpleRegression', function() {
		describe('testing', function() {
			describe('#solve', function() {

			});
		});
	})
});