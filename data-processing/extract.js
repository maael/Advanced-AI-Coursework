var extract = function(options, callback) {
	options = options || {};
	options.path = options.path || '';
	options.format = options.format || 'csv';
	var parse = require('csv-parse'),
		fs = require('fs'),
		source = fs.readFileSync(options.path).toString();
	parse(source, function(err, data) {
		var result = [];
		for(var i = 0; i < data[0].length; i++) {
			result.push({'name': data[0][i], 'data': []});
		}
		for(var i = 1; i < data.length; i++) {
			for(var j = 0; j < data[i].length; j++) {
				result[j].data.push(parseFloat(data[i][j]));
			}
		}
		callback(result);
	});
};

module.exports = extract;