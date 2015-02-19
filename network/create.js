var ann = require('node-ann');
var create = function() {

    var network = new ann.ann({
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
            epochs: 10000,
            report: true
        }),

        /* Input perceptrons */
        i1 = new ann.perceptron({id: 'i1', type: 'input'}),
        i2 = new ann.perceptron({id: 'i2', type: 'input'}),
        i3 = new ann.perceptron({id: 'i3', type: 'input'}),
        i4 = new ann.perceptron({id: 'i4', type: 'input'}),
        i5 = new ann.perceptron({id: 'i5', type: 'input'}),
        i6 = new ann.perceptron({id: 'i6', type: 'input'}),
        i7 = new ann.perceptron({id: 'i7', type: 'input'}),
        i8 = new ann.perceptron({id: 'i8', type: 'input'}),

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
        o1 = new ann.perceptron({id: 'o1', type: 'output'});

    /* Add perceptrons to network */
    network.addPerceptron(i1);
    network.addPerceptron(i2);
    network.addPerceptron(i3);
    network.addPerceptron(i4);
    network.addPerceptron(i5);
    network.addPerceptron(i6);
    network.addPerceptron(i7);
    network.addPerceptron(i8);

    network.addPerceptron(h1);
    network.addPerceptron(h2);
    network.addPerceptron(h3);
    network.addPerceptron(h4);
    network.addPerceptron(h5);
    network.addPerceptron(h6);
    network.addPerceptron(h7);
    network.addPerceptron(h8);

    network.addPerceptron(o1);

    /* Network layers */
    network.addLayer([
        'i1',
        'i2',
        'i3',
        'i4',
        'i5',
        'i6',
        'i7',
        'i8'
    ]);

    network.addLayer([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'h7',
        'h8'
    ]);

    network.addLayer([
        'o1'
    ]);

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
    network.addWeighting({from: 'h2', to: 'o1'});
    network.addWeighting({from: 'h3', to: 'o1'});
    network.addWeighting({from: 'h4', to: 'o1'});
    network.addWeighting({from: 'h5', to: 'o1'});
    network.addWeighting({from: 'h6', to: 'o1'});
    network.addWeighting({from: 'h7', to: 'o1'});
    network.addWeighting({from: 'h8', to: 'o1'});

    return network;
};

module.exports = create;