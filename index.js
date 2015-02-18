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
* Network creation 
*/
    network = require('./network/network'),
    network = network.create();

network.train(trainingSet);
function getOutputlessSet(set, setNumber) {
    var example = {inputSet: [], outputSet: []};
    for(var i = 0; i < (set.length - 1); i++) {
        example.inputSet.push([set[i][setNumber]]);
    }
    example.outputSet.push(set[(set.length - 1)][setNumber]);
    return example;
}
var test, predicted, actual, errorSum = 0;
for(var i = 0; i < testingSet[0].length; i++) {
    test = getOutputlessSet(validationSet, 2),
    predicted = network.solve(test.inputSet),
    actual = test.outputSet;
    errorSum += Math.abs(predicted - actual);
}
console.log('Average Error:' + (errorSum / testingSet[0].length));