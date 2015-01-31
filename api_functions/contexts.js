var fs = require('fs'),
    _ = require('lodash'),
    path = require('path'),
    getCode,
    contexts;

getCode = function (name) {
    return fs.readFileSync(path.resolve(__dirname + '/code/' + name +'.js'), 'utf8');
};

contexts = [
    {
        name: 'get',
        description: 'Get the value at the focus of the lens and return it.',
        code: getCode('get'),
        output_lines: [
            { out: 3 }
        ]
    }
];

module.exports = contexts;