var fs = require('fs');
var Module = require('module');

var file = System.normalizeSync("/jspm_packages/npm/esprima@1.2.2/esprima");
var source = fs.readFileSync(file, 'utf-8');

// inject '@' as a valid identifier!
source = source.replace(/(function isIdentifierStart\(ch\) {\s+return)/m, '$1 (ch == 0x40) || ');

/*
var _module = new Module('aesprim');
_module._compile(source, __filename);

module.exports = _module.exports;
*/
