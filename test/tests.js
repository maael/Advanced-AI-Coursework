var process = require('../data-processing/process'),
	chai = require('chai'),
	should = chai.should();
describe('Coursework', function() {
	describe('#process', function() {
		describe('#extraction', function() {
			it('should return csv as array', function() {
				process.extract({path: 'data/CWData.csv'}, function(data) {
					data.should.be.an('array');
					data[0].data.should.be.length(597);
					data[1].data.should.be.length(597);
					data[2].data.should.be.length(597);
					data[3].data.should.be.length(597);
					data[4].data.should.be.length(597);
					data[5].data.should.be.length(597);
					data[6].data.should.be.length(597);
					data[7].data.should.be.length(597);
					data[8].data.should.be.length(597);
				});
			});
		});
		describe('#standardisation', function() {
			it('should standardise between 0-1', function() {
				process.standardise({path: 'data/CWData.csv'}, function(data) {

				});
			});
		});
	});
})