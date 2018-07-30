// this isn't transpiled therefore must use ES5

// register babel to transpile before running tests
require('babel-register')();

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
