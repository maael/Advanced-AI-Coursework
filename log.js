var fs = require('fs');
function log(file, observed, prediction) {
    var i, line = '';
    for(i = 0; i < observed.inputSet.length; i++) {
        line += observed.inputSet[i] + ',';
    }
    for(i = 0; i < observed.outputSet.length; i++) {
        line += observed.outputSet[i] + ',';
    }
    line += prediction + '\n';
    fs.appendFileSync(file, line);
}

module.exports = log;