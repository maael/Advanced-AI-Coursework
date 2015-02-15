var create = function() {
    var ann = require('node-ann'),
        network = new ann.ann(),

        /* Network layers */
        inputLayer = new ann.layer({type: 'input'}),
        hiddenLayer = new ann.layer(),
        outputLayer = new ann.layer({type: 'output'}),

        /* Input perceptrons */
        i1 = new ann.perceptron({id: 'i1'}),
        i2 = new ann.perceptron({id: 'i2'}),
        i3 = new ann.perceptron({id: 'i3'}),
        i4 = new ann.perceptron({id: 'i4'}),
        i5 = new ann.perceptron({id: 'i5'}),
        i6 = new ann.perceptron({id: 'i6'}),
        i7 = new ann.perceptron({id: 'i7'}),
        i8 = new ann.perceptron({id: 'i8'}),

        /* Hidden perceptrons */
        h1 = new ann.perceptron({id: 'h1'}),
        h2 = new ann.perceptron({id: 'h2'}),
        h3 = new ann.perceptron({id: 'h3'}),
        h4 = new ann.perceptron({id: 'h4'}),
        h5 = new ann.perceptron({id: 'h5'}),
        h6 = new ann.perceptron({id: 'h6'}),
        h7 = new ann.perceptron({id: 'h7'}),
        h8 = new ann.perceptron({id: 'h8'}),
        
        /* Output perceptrons */
        o1 = new ann.perceptron({id: 'o1'});

    /* Add input perceptrons to input layer */
    inputLayer.addPerceptron(i1);
    inputLayer.addPerceptron(i2);
    inputLayer.addPerceptron(i3);
    inputLayer.addPerceptron(i4);
    inputLayer.addPerceptron(i5);
    inputLayer.addPerceptron(i6);
    inputLayer.addPerceptron(i7);
    inputLayer.addPerceptron(i8);


    /* Add hidden perceptrons to hidden layer */
    hiddenLayer.addPerceptron(h1);
    hiddenLayer.addPerceptron(h2);
    hiddenLayer.addPerceptron(h3);
    hiddenLayer.addPerceptron(h4);
    hiddenLayer.addPerceptron(h5);
    hiddenLayer.addPerceptron(h6);
    hiddenLayer.addPerceptron(h7);
    hiddenLayer.addPerceptron(h8);


    /* Add output perceptrons to output layer */
    outputLayer.addPerceptron(o1);

    /* Add layers to network */
    network.addLayer(inputLayer);
    network.addLayer(hiddenLayer);
    network.addLayer(outputLayer);

    /* Add relationships between inputs and hidden perceptrons */
    network.addWeighting({from: 'i1', to: 'h1'});
    network.addWeighting({from: 'i1', to: 'h2'});
    network.addWeighting({from: 'i1', to: 'h3'});
    network.addWeighting({from: 'i1', to: 'h4'});
    network.addWeighting({from: 'i1', to: 'h5'});
    network.addWeighting({from: 'i1', to: 'h6'});
    network.addWeighting({from: 'i1', to: 'h7'});
    network.addWeighting({from: 'i1', to: 'h8'});

    network.addWeighting({from: 'i2', to: 'h1'});
    network.addWeighting({from: 'i2', to: 'h2'});
    network.addWeighting({from: 'i2', to: 'h3'});
    network.addWeighting({from: 'i2', to: 'h4'});
    network.addWeighting({from: 'i2', to: 'h5'});
    network.addWeighting({from: 'i2', to: 'h6'});
    network.addWeighting({from: 'i2', to: 'h7'});
    network.addWeighting({from: 'i2', to: 'h8'});

    network.addWeighting({from: 'i3', to: 'h1'});
    network.addWeighting({from: 'i3', to: 'h2'});
    network.addWeighting({from: 'i3', to: 'h3'});
    network.addWeighting({from: 'i3', to: 'h4'});
    network.addWeighting({from: 'i3', to: 'h5'});
    network.addWeighting({from: 'i3', to: 'h6'});
    network.addWeighting({from: 'i3', to: 'h7'});
    network.addWeighting({from: 'i3', to: 'h8'});

    network.addWeighting({from: 'i4', to: 'h1'});
    network.addWeighting({from: 'i4', to: 'h2'});
    network.addWeighting({from: 'i4', to: 'h3'});
    network.addWeighting({from: 'i4', to: 'h4'});
    network.addWeighting({from: 'i4', to: 'h5'});
    network.addWeighting({from: 'i4', to: 'h6'});
    network.addWeighting({from: 'i4', to: 'h7'});
    network.addWeighting({from: 'i4', to: 'h8'});

    network.addWeighting({from: 'i5', to: 'h1'});
    network.addWeighting({from: 'i5', to: 'h2'});
    network.addWeighting({from: 'i5', to: 'h3'});
    network.addWeighting({from: 'i5', to: 'h4'});
    network.addWeighting({from: 'i5', to: 'h5'});
    network.addWeighting({from: 'i5', to: 'h6'});
    network.addWeighting({from: 'i5', to: 'h7'});
    network.addWeighting({from: 'i5', to: 'h8'});

    network.addWeighting({from: 'i6', to: 'h1'});
    network.addWeighting({from: 'i6', to: 'h2'});
    network.addWeighting({from: 'i6', to: 'h3'});
    network.addWeighting({from: 'i6', to: 'h4'});
    network.addWeighting({from: 'i6', to: 'h5'});
    network.addWeighting({from: 'i6', to: 'h6'});
    network.addWeighting({from: 'i6', to: 'h7'});
    network.addWeighting({from: 'i6', to: 'h8'});

    network.addWeighting({from: 'i7', to: 'h1'});
    network.addWeighting({from: 'i7', to: 'h2'});
    network.addWeighting({from: 'i7', to: 'h3'});
    network.addWeighting({from: 'i7', to: 'h4'});
    network.addWeighting({from: 'i7', to: 'h5'});
    network.addWeighting({from: 'i7', to: 'h6'});
    network.addWeighting({from: 'i7', to: 'h7'});
    network.addWeighting({from: 'i7', to: 'h8'});

    network.addWeighting({from: 'i8', to: 'h1'});
    network.addWeighting({from: 'i8', to: 'h2'});
    network.addWeighting({from: 'i8', to: 'h3'});
    network.addWeighting({from: 'i8', to: 'h4'});
    network.addWeighting({from: 'i8', to: 'h5'});
    network.addWeighting({from: 'i8', to: 'h6'});
    network.addWeighting({from: 'i8', to: 'h7'});
    network.addWeighting({from: 'i8', to: 'h8'});

    /* Add relationships between hidden and output perceptrons */
    network.addWeighting({from: 'h1', to: 'o1'});
    network.addWeighting({from: 'h2', to: 'o2'});
    network.addWeighting({from: 'h3', to: 'o3'});
    network.addWeighting({from: 'h4', to: 'o4'});
    network.addWeighting({from: 'h5', to: 'o5'});
    network.addWeighting({from: 'h6', to: 'o6'});
    network.addWeighting({from: 'h7', to: 'o7'});
    network.addWeighting({from: 'h8', to: 'o8'});

    return network;
}

module.exports = create;