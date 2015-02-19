var math = require('mathjs');
var simpleLinearRegression = function(options, data) {
    options = options || {};
    options.errorValue = options.errorValue || 0;
    var beta = [];
    function calculate() {
        var responseVector, designMatrix = [], slopeVector = [], errorVector = [];
        responseVector = transpose([data[(data.length - 1)]]);
        designMatrix[0] = [];
        for(var i = 0; i < data[0].length; i++) {
            designMatrix[0].push(1);
        }
        for(var i = 0; i < (data.length - 1); i++) {
            var row = data[i];
            designMatrix[i + 1] = row;
        }
        var designTransposed = designMatrix;
        designMatrix = transpose(designMatrix);
        beta = math.inv(math.multiply(designTransposed, designMatrix));
        beta = math.multiply(beta, math.multiply(designTransposed, responseVector));
    }
    function transpose(matrix) {
        var transposed = [],
            rows = matrix.length,
            columns = matrix[0].length;
        for(var i = 0; i < columns; i++) transposed.push([]);
        for(var i = 0; i < rows; i++) {
            for(var j = 0; j < columns; j++) {
                transposed[j][i] = matrix[i][j];
            }
        }
        return transposed;
    }
    function solve(inputs) {
        prediction = beta[0][0];
        for(var i = 0; i < (beta.length - 1); i++) {
            prediction += (beta[i + 1][0] * inputs[i]);
        }
        prediction += options.errorValue;
        return prediction;
    }
    return {
        calculate: calculate,
        solve: solve
    };
};

module.exports = simpleLinearRegression;