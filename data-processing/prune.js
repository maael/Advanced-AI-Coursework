var prune = function(options, callback) {
	options = options || {};
	options.formats = options.formats || [];
	var extract = require('./extract');
	extract(options, function(result) {
		var dataLength = result[0].data.length;
		for(var i = 0; i < result.length; i++) {
			for(var j = 0; j < dataLength; j++) {
				if(!validate(result[i].data[j], options.formats[i])) {
					result = removeRow(j, result);
				}
			}
		}
		callback(result);
	});
};

function validate(value, format) {
	return (typeof(value) === format);
}

function removeRow(row, data) {

}

module.exports = prune;