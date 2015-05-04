'use strict';

var fs = require('fs');

var noComment = function (sourceFile) {
    if (!fs.existsSync(sourceFile)) {
        console.error('File does not exist: ' + sourceFile);
        process.exit(1);
    }

    var filedata = fs.readFileSync(sourceFile);

    var block = /\/\*(.|\n)*?\*\/\s*/g;
    var line = /\/\/.*\s*/g;

    return filedata.toString().replace(block, '').replace(line, '');
};

module.exports = noComment;
