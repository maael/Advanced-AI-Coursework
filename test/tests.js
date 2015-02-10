var extract = require('../data-processing/extract'),
	chai = require('chai'),
	should = chai.should();
describe('Coursework', function() {
	describe('Data Preprocessing', function() {
		describe('#extraction', function() {
			it('should return csv as array', function() {
				extract({path: 'data/CWData.csv'}, function(data) {
					data.should.be.an('array');
					data.should.be.length(598);
				});
			})
		});
		describe('#standardisation', function() {

		});
	});
})