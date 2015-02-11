var process = require('../data-processing/process'),
	chai = require('chai'),
	should = chai.should();
describe('Coursework', function() {
	describe('#process', function() {
		describe('#csvParser', function() {
			it('should extract csv from a file correctly correctly', function() {
				var fs = require('fs'),
					source = fs.readFileSync('data/CWData.csv').toString(),
					data = process.csvParser(source);
					data.should.be.length(598);
					data.should.be.a('array');
			});
		});
		describe('#extraction', function() {
			it('should return csv as array', function() {
				var data = process.extract({path: 'data/CWData.csv'});
				data.should.be.an('array');
				data[0].should.be.length(597);
				data[1].should.be.length(597);
				data[2].should.be.length(597);
				data[3].should.be.length(597);
				data[4].should.be.length(597);
				data[5].should.be.length(597);
				data[6].should.be.length(597);
				data[7].should.be.length(597);
				data[8].should.be.length(597);
			});
		});
		describe('#cleanse', function() {			
			it('should cleanse data of invalid types', function() {
				var data = process.cleanse({path: 'data/CWData.csv', formats: ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']});
			});
		});
		describe('#standardisation', function() {
			it('should standardise between 0-1', function() {
				var data = process.standardise({path: 'data/CWData.csv', formats: ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']});
			});
		});
	});
})