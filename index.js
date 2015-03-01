/* 
* Preprocessing 
*/
var preprocess = require('node-data-preprocessing'),
    preOptions = {
        path: 'data/CWData.csv',
        formats: [
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number'
        ],
        ranges: [
            { 'greaterOrEqual': 0 },
            {},
            {},
            {},
            { 'greaterOrEqual': 0 },
            {},
            {},
            {},
            {}
        ]
    },
    preprocessed = preprocess.process(preOptions),
    trainingSet = preprocessed[0],
    validationSet = preprocessed[1],
    testingSet = preprocessed[2],
/* 
* Dependencies 
*/
    network = require('./network/network'),
    network = network.create(),
    regression = require('./linear-regression/simple'),
    fs = require('fs');
function getOutputlessSet(set, setNumber) {
    var example = {inputSet: [], outputSet: []};
    for(var i = 0; i < (set.length - 1); i++) {
        example.inputSet.push([set[i][setNumber]]);
    }
    example.outputSet.push(set[(set.length - 1)][setNumber]);
    return example;
}
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
if(process.argv.indexOf('regression') > -1) {
    var regress = regression({}, trainingSet);
    regress.calculate();
    var test, predicted, actual, differenceSquared = 0, errorSum = 0;
    for(var i = 0; i < testingSet[0].length; i++) {
        test = getOutputlessSet(validationSet, i),
        predicted = regress.solve(test.inputSet);
        log('regression.csv', test, predicted);
        actual = test.outputSet;
        differenceSquared += Math.pow(predicted - actual, 2);
        errorSum += Math.abs(predicted - actual);
    }
    console.log('Average Error: ' + (errorSum / testingSet[0].length));
    console.log('RMSE Error: ' + Math.sqrt(differenceSquared / testingSet[0].length));
} else {
    network.initialise();
    network.train(trainingSet, validationSet);
    var test, predicted, actual, differenceSquared = 0, errorSum = 0;
    for(var i = 0; i < testingSet[0].length; i++) {
        test = getOutputlessSet(testingSet, i),
        predicted = network.solve(test.inputSet);
        log('network.csv', test, predicted);
        actual = test.outputSet;
        differenceSquared += Math.pow(predicted - actual, 2);
        errorSum += Math.abs(predicted - actual);
    }
    console.log('Average Error: ' + (errorSum / testingSet[0].length));
    console.log('RMSE Error: ' + Math.sqrt(differenceSquared / testingSet[0].length));
}