var process = require('node-data-preprocessing'),
	network = require('../network/network'),
	chai = require('chai'),
	should = chai.should();
describe('Coursework', function() {
	describe('#network', function() {
		describe('#creation', function() {
			it('should create the network correctly', function() {
				var net = network.create();
				net.getLayers().should.be.length(3);
				net.printGraph();
			});
		});
	});
});