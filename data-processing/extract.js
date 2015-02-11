var extract = function(options) {
	options = options || {};
	options.path = options.path || '';
	options.format = options.format || 'csv';
	options.useHeaders = options.useHeaders || true;
	var csvParser = require('./csvParser'),
		fs = require('fs'),
		source = fs.readFileSync(options.path).toString(),
		data = csvParser(source);
		result = [];
	for(var j = 0; j < data[0].length; j++) {
		result.push([]);
	}	
	for(var i = 1; i < data.length; i++) {
		for(var j = 0; j < data[i].length; j++) {
			result[j].push(parseFloat(data[i][j]));
		}
	}
	return result;
};

module.exports = extract;