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

// invoked from shell
if (require.main === module) {
    if (process.argv.length < 3) {
        console.error('Too few arguments');
        process.exit(1);
    }

    var sourceFile = process.argv[2];
    var targetFile = process.argv[3];

    var output = noComment(sourceFile);

    if (!targetFile) {
        return console.log(output);
    }

    fs.writeFile(targetFile, output, function (err) {
        if (err) throw err;
    });
}
