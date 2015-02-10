var extraction = function(options, callback) {
	options = options || {};
	options.path = options.path || '';
	options.format = options.format || 'csv';
	var parse = require('csv-parse'),
		fs = require('fs'),
		source = fs.readFileSync(options.path).toString();
		parse(source, function(err, data) {
			callback(data);
		});
};

module.exports = extraction;