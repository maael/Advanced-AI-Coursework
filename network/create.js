var create = function() {
    var ann = require('node-ann'),
        network = new ann.ann(),
        inputLayer = new ann.layer({type: 'input'}),
        outputLayer = new ann.layer({type: 'output'}),
        i1 = new ann.perceptron({id: 'i1'}),
        i2 = new ann.perceptron({id: 'i2'}),
        i3 = new ann.perceptron({id: 'i3'}),
        i4 = new ann.perceptron({id: 'i4'}),
        i5 = new ann.perceptron({id: 'i5'}),
        i6 = new ann.perceptron({id: 'i6'}),
        i7 = new ann.perceptron({id: 'i7'}),
        i8 = new ann.perceptron({id: 'i8'}),
        o1 = new ann.perceptron({id: 'o1'});

    inputLayer.addPerceptron(i1);
    inputLayer.addPerceptron(i2);
    inputLayer.addPerceptron(i3);
    inputLayer.addPerceptron(i4);
    inputLayer.addPerceptron(i5);
    inputLayer.addPerceptron(i6);
    inputLayer.addPerceptron(i7);
    inputLayer.addPerceptron(i8);
    outputLayer.addPerceptron(o1);

    network.addLayer(inputLayer);
    network.addLayer(outputLayer);

    return network;
}

module.exports = create;