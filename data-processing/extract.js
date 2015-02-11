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
	for(var i = 0; i < data[0].length; i++) {
		var entry = {'data': []};
		if(options.useHeaders) entry['name'] = data[0][i];
		result.push(entry);
	}
	for(var i = 1; i < data.length; i++) {
		for(var j = 0; j < data[i].length; j++) {
			result[j].data.push(parseFloat(data[i][j]));
		}
	}
	return result;
};

module.exports = extract;