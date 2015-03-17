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
        errorThreshold: 0.,
        learningStep: 0.15,
        log: true
    },
    log = require('./log'),
    network = require('./network/network'),
    regression = require('./linear-regression/multiple');
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
    var test, predicted = [], actual = [],
        differenceSum = 0, differenceSquared = 0, differenceOverActualSquared = 0, errorSum = 0;
    for(var i = 0; i < testingSet[0].length; i++) {
        test = getOutputlessSet(validationSet, i),
        predicted.push(regress.solve(test.inputSet));
        actual.push(test.outputSet);
        difference = predicted[i] - actual[i];
        differenceSquared += Math.pow(difference, 2);
        differenceOverActualSquared += Math.pow((difference / actual[i]), 2);
        differenceSum += difference; 
        errorSum += Math.abs(difference);
        var line = predicted[i] + ',' + actual[i];
        log('selectionData/regression-final-errors.csv', {inputSet: [], outputSet: []}, line);
    }        
    for(var i = 0; i < testingSet[0].length; i++) {
        sst = Math.pow(((predicted[i] - actual[i]) - (differenceSum / testingSet[0].length)), 2);
        ssr = Math.pow((predicted[i] - actual[i]), 2);
    }
    var averageError = (errorSum / testingSet[0].length),
        rmseError = Math.sqrt(differenceSquared / testingSet[0].length),
        msreError = (1 / trainingSet[0].length) * differenceOverActualSquared,
        ceError = 1 - (differenceSquared / sst),
        rsqError = 1 - Math.pow((ssr / Math.sqrt(sst)), 2),
        line = averageError + ',' + rmseError + ',' + msreError + ',' + rsqError;
    log('selectionData/regression-final-assessment.csv', {inputSet: [], outputSet: []}, line);
} else {
    var loops = (process.argv.length > 3) ? process.argv[3] : 1,
        createdNetwork,
        learningStep = 0,
        momentum = 0;
        loopLearningStep = [],
        loopRMSE = [];
    for(var j = 0; j < loops; j++) {
        learningStep = 0;
        momentum += 0.01;
        momentum = Math.round((momentum) * 1000) / 1000;
        //options.momentum = momentum;
        for(var k = 0; k < loops; k++) {
            learningStep += 0.01;
            learningStep = Math.round((learningStep) * 1000) / 1000;
            //options.learningStep = learningStep;
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
            var test, predicted = [], actual = [],
                differenceSum = 0, differenceSquared = 0, differenceOverActualSquared = 0, errorSum = 0;
            for(var i = 0; i < testingSet[0].length; i++) {
                test = getOutputlessSet(testingSet, i),
                predicted.push(createdNetwork.solve(test.inputSet));
                actual.push(test.outputSet);
                difference = predicted[i] - actual[i];
                differenceSquared += Math.pow(difference, 2);
                differenceSquared += Math.pow(difference, 2);
                differenceOverActualSquared += Math.pow((difference / actual[i]), 2);
                differenceSum += difference; 
                errorSum += Math.abs(difference);
                var line = predicted[i] + ',' + actual[i];
                log('selectionData/network-final-errors.csv', {inputSet: [], outputSet: []}, line);
            }        
            for(var i = 0; i < testingSet[0].length; i++) {
                sst = Math.pow(((predicted[i] - actual[i]) - (differenceSum / testingSet[0].length)), 2);
                ssr = Math.pow((predicted[i] - actual[i]), 2);
            }
            var averageError = (errorSum / testingSet[0].length),
                rmseError = Math.sqrt(differenceSquared / testingSet[0].length),
                msreError = (1 / trainingSet[0].length) * differenceOverActualSquared,
                ceError = 1 - (differenceSquared / sst),
                rsqError = 1 - Math.pow((ssr / Math.sqrt(sst)), 2),
                line = averageError + ',' + rmseError + ',' + msreError + ',' + rsqError;
            log('selectionData/network-final-assessment.csv', {inputSet: [], outputSet: []}, line);
        }
    }
}