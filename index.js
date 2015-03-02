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
    options = {
        dataFormat: [
            'input',
            'input',
            'input',
            'input',
            'input',
            'input',
            'input',
            'input',
            'output'
        ],
        epochs: 1000,
        report: true,
        errorThreshold: 0.035,
        log: true
    },
    log = require('./log'),
    network = require('./network/network'),
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
    if (process.argv.indexOf('net2') > -1){
        network = network.create2(options);
    } else if (process.argv.indexOf('net3') > -1){
        network = network.create3(options);
    } else if (process.argv.indexOf('net4') > -1) {
        network = network.create4(options);
    } else if (process.argv.indexOf('net5') > -1) {
        network = network.create5(options);
    } else if (process.argv.indexOf('net6') > -1) {
        network = network.create6(options);
    } else if (process.argv.indexOf('net7') > -1) {
        network = network.create7(options);
    } else if (process.argv.indexOf('net8') > -1) {
        network = network.create8(options);
    } else {
        network = network.create(options);       
    }
    network.initialise();
    network.train(trainingSet, validationSet);
    var test, predicted, actual, differenceSquared = 0, errorSum = 0;
    for(var i = 0; i < testingSet[0].length; i++) {
        test = getOutputlessSet(testingSet, i),
        predicted = network.solve(test.inputSet);
        //log(process.argv[2] + '-testing.csv', test, predicted);
        actual = test.outputSet;
        differenceSquared += Math.pow(predicted - actual, 2);
        errorSum += Math.abs(predicted - actual);
    }
    console.log('Average Error: ' + (errorSum / testingSet[0].length));
    console.log('RMSE Error: ' + Math.sqrt(differenceSquared / testingSet[0].length));
}