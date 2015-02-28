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
    regression = require('./linear-regression/simple');
function getOutputlessSet(set, setNumber) {
    var example = {inputSet: [], outputSet: []};
    for(var i = 0; i < (set.length - 1); i++) {
        example.inputSet.push([set[i][setNumber]]);
    }
    example.outputSet.push(set[(set.length - 1)][setNumber]);
    return example;
}
if(process.argv.indexOf('regression') > -1) {
    var regress = regression({}, trainingSet);
    regress.calculate();
    var test, predicted, actual, errorSum = 0;
    for(var i = 0; i < testingSet[0].length; i++) {
        test = getOutputlessSet(validationSet, i),
        predicted = regress.solve(test.inputSet);
        actual = test.outputSet;
        errorSum += Math.abs(predicted - actual);
    }
    console.log('Average Error: ' + (errorSum / testingSet[0].length));
} else {
    network.initialise();
    network.train(trainingSet, validationSet);
}