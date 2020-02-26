'use strict';

const parse = require('./parse');

module.exports = {
    parseString: (string) => {
        const params = string.split(' ');
        return parse(params);
    },
    parseArgs: () => {
        const params = process.argv;
        return parse(params);
    }
}
