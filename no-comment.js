'use strict';

var regexAllComments = /\/\*[\S\s]*?\*\/\s*|[^\S\n]*\/\/.*\s*/g;
var regexBlockComments = /\/\*[\S\s]*?\*\/\s*/g;

var noComment = function (input) {
    return input.replace(regexAllComments, '');
};

noComment.removeBlockComments = function (input) {
    return input.replace(regexBlockComments, '');
};

module.exports = noComment;
