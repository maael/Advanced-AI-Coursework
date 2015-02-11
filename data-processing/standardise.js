var standardise = function(options, callback) {
	options = options || {};
	options.path = options.path || '';
	options.format = options.format || 'csv';
	options.min = options.min || 0.1;
	options.max = options.max || 0.9;
	options.standardisationMethod = options.standardisationMethod || 'default';
	var cleanse = require('./cleanse'),
		result = cleanse(options),
		data, min, max;
	for(var i = 1; i < result.length; i++) {
		data = result[i].data;
		max = Math.max.apply(null, data);
		min = Math.min.apply(null, data);
		for(var j = 0; j < data[i].length; j++) {
			data[i][j] = standardisation(options.standardisationMethod, min, max, data[j]);
		}
	}
	return data;
};
function standardisation(type, min, max, value) {
	var result;
	switch(type) {
		case 'ss':
			result = ssStandardisation(min, max, value);
			break;
		case 'normal':
			result = normalStandardisation(min, max, value);
			break;
		default:
			result = defaultStandardisation(min, max, value);
	}
	return result;
}
function defaultStandardisation(min, max, value) {
	return 0.8 * ((value - min)/(max - min)) + 0.1;
}

function ssStandardisation(min, max, value) {

}

function normalStandardisation(min, max, value) {

}

module.exports = standardise;