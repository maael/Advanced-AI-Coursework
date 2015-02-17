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
    setFormat = [
        'input',
        'input',
        'input',
        'input',
        'input',
        'input',
        'input',
        'input',
        'output'
    ]
/* 
* Network creation 
*/
    network = require('./network/network'),
    network = network.create();

console.log(trainingSet);

network.train(trainingSet);