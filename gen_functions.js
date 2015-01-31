var _ = require('lodash'),
    fs = require('fs'),
    Handlebars = require('handlebars'),
    template = Handlebars.compile(fs.readFileSync('templates/api-function.html', 'utf8')),
    context = {
        name: 'get',
        description: 'Get the value at the focus of the lens and return it.',
        code: 'var lens = nanoscope([1, 2, 3]).index(2);\nlens.get();',
        output_lines: [
            { out: 3 }
        ]
    },

    contexts = require('./api_functions/contexts.js');

_.forEach(contexts, function (context) {
    console.log(template(context));
});
