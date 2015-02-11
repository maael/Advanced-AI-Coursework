var process = function(options) {
    options = options || {};
    options.path = options.path || '';
    var csvParser = require('./csvParser'),
        extract = require('./extract'),
        cleanse = require('./cleanse'),
        standardise = require('./standardise'),
        fs = require('fs'),
        source = fs.readFileSync(options.path).toString(),
        data;

        data = csvParser(source);
        data = extract(options, data);
        data = cleanse(options, data);
        data = standardise(options, data);

        return data;
};

module.exports = process;