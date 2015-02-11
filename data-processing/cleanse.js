var cleanse = function(options, callback) {
	options = options || {};
	options.formats = options.formats || [];
	var extract = require('./extract'),
		result = extract(options),
		dataLength = result[0].data.length;
	for(var i = 0; i < result.length; i++) {
		for(var j = 0; j < dataLength; j++) {
			if(!validate(result[i].data[j], options.formats[i])) {
				result = removeRow(j, result);
			}
		}
	}
	return result;
};

function validate(value, format) {
	return (typeof(value) === format);
}

function removeRow(row, data) {

}

module.exports = cleanse;