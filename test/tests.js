var process = require('../data-processing/process'),
	chai = require('chai'),
	should = chai.should();
describe('Coursework', function() {
	describe('#process', function() {
		var csv, extracted, cleansed, standardised, processed;
		describe('#csvParser', function() {
			it('should extract csv from a file correctly correctly', function() {
				var fs = require('fs'),
					source = fs.readFileSync('data/CWData.csv').toString();
				csv = process.csvParser(source);
				csv.should.be.length(598);
				csv.should.be.a('array');
			});
		});
		describe('#extraction', function() {
			it('should return csv as array', function() {
				extracted = process.extract({path: 'data/CWData.csv'}, csv);
				extracted.should.be.an('array');
				for(var i = 0; i < extracted.length; i++) {
					extracted[i].should.be.length(597);
				}
			});
		});
		describe('#cleanse', function() {			
			it('should cleanse data of invalid types', function() {
				var formats = ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'];
				cleansed = process.cleanse({path: 'data/CWData.csv', formats: formats}, extracted);
				for(var i = 0; i < cleansed.length; i++) {
					for(var j = 0; j < cleansed[i].length; j++) {
						cleansed[i][j].should.be.a(formats[i]);
					}
				}
			});
		});
		describe('#standardisation', function() {
			it('should standardise between 0.1-0.9 with default method', function() {
				var formats = ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'];
				standardised = process.standardise({path: 'data/CWData.csv', formats: formats}, cleansed);
				for(var i = 0; i < standardised.length; i++) {
					for(var j = 0; j < standardised[i].length; j++) {
						standardised[i][j].should.be.within(0.1, 0.9);
					}
				}
			});
			it('should standardise between 0-1 with normal method', function() {
				var formats = ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'];
				standardised = process.standardise({path: 'data/CWData.csv', formats: formats, standardiseMethod: 'normal'}, cleansed);
				for(var i = 0; i < standardised.length; i++) {
					for(var j = 0; j < standardised[i].length; j++) {
						standardised[i][j].should.be.within(0, 1);
					}
				}
			});
			it('should standardise between - with sum of squares method', function() {
				var formats = ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'];
				standardised = process.standardise({path: 'data/CWData.csv', formats: formats, standardiseMethod: 'ss'}, cleansed);
				for(var i = 0; i < standardised.length; i++) {
					for(var j = 0; j < standardised[i].length; j++) {
						standardised[i][j].should.be.within(0, 1);
					}
				}
			});
		});
		describe('#process', function() {
			it('should correctly perform the entire data preprocessing', function() {
				var formats = ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'],
					test = process.process({path: 'data/CWData.csv', formats: formats});
				for(var i = 0; i < test.length; i++) {
					test[i].length.should.be.closeTo(597, 10);
				}
				for(var i = 0; i < test.length; i++) {
					for(var j = 0; j < test[i].length; j++) {
						test[i][j].should.be.a(formats[i]);
					}
				}
				for(var i = 0; i < test.length; i++) {
					for(var j = 0; j < test[i].length; j++) {
						test[i][j].should.be.within(0.1, 0.9);
					}
				}
			});
		});
	});
})