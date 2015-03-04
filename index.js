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
        learningStep: 0.15,
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
    var test, predicted, actual, 
        differenceSquared = 0, differenceOverActualSquared = 0, errorSum = 0;
    for(var i = 0; i < testingSet[0].length; i++) {
        test = getOutputlessSet(validationSet, i),
        predicted = regress.solve(test.inputSet);
        //log('regression.csv', test, predicted);
        actual = test.outputSet;
        differenceSquared += Math.pow(predicted - actual, 2);
        differenceOverActualSquared += Math.pow((predicted - actual / actual), 2);
        errorSum += Math.abs(predicted - actual);
    }
    console.log('Average Error: ' + (errorSum / testingSet[0].length));
    console.log('RMSE Error: ' + Math.sqrt(differenceSquared / testingSet[0].length));
    console.log('MSRE Error: ' + (1 / trainingSet[0].length) * differenceOverActualSquared);
} else {
    var loops = (process.argv.length > 3) ? process.argv[3] : 1,
        createdNetwork,
        learningStep = 0;
        loopLearningStep = [],
        loopRMSE = [];
    for(var j = 0; j < loops; j++) {
        learningStep += 0.01;
        options.momentum = learningStep;
        if (process.argv.indexOf('net2') > -1){
            createdNetwork = network.create2(options);
        } else if (process.argv.indexOf('net3') > -1){
            createdNetwork = network.create3(options);
        } else if (process.argv.indexOf('net4') > -1) {
            createdNetwork = network.create4(options);
        } else if (process.argv.indexOf('net5') > -1) {
            createdNetwork = network.create5(options);
        } else if (process.argv.indexOf('net6') > -1) {
            createdNetwork = network.create6(options);
        } else if (process.argv.indexOf('net7') > -1) {
            createdNetwork = network.create7(options);
        } else if (process.argv.indexOf('net8') > -1) {
            createdNetwork = network.create8(options);
        } else {
            createdNetwork = network.create(options);       
        }
        createdNetwork.initialise();
        createdNetwork.train(trainingSet, validationSet);
        var test, predicted, actual,
            differenceSquared = 0, differenceOverActualSquared = 0, errorSum = 0;
        for(var i = 0; i < testingSet[0].length; i++) {
            test = getOutputlessSet(testingSet, i),
            predicted = createdNetwork.solve(test.inputSet);
            //log(process.argv[2] + '-testing.csv', test, predicted);
            actual = test.outputSet;
            differenceSquared += Math.pow(predicted - actual, 2);
            differenceOverActualSquared += Math.pow((predicted - actual / actual), 2);
            errorSum += Math.abs(predicted - actual);
        }
        var averageError = (errorSum / testingSet[0].length),
            rmseError = Math.sqrt(differenceSquared / testingSet[0].length),
            msreError = (1 / trainingSet[0].length) * differenceOverActualSquared,
            line = learningStep + ',' + averageError + ',' + rmseError + ',' + msreError;
        console.log('Average Error: ' + averageError);
        console.log('RMSE Error: ' + rmseError);
        console.log('MSRE Error: ' + msreError);
        log('learningStepData/momentum.csv', {inputSet: [], outputSet: []}, line);
    }
}