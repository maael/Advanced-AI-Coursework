/* 
* Preprocessing 
*/
var preprocess = require('./data-processing/process'),
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

network.printGraph();