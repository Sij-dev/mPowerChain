'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

// const web3 = new Web3(provider);

//const Web3 = require('web3');
if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
    // we are in the browser && metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // we are on the server or the user in not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/gnuK7wSZjunUiGS39i41');

    web3 = new _web2.default(provider);
}

exports.default = web3;