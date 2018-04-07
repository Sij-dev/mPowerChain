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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZQUFKOztBQUVBOztBQUxBO0FBT0EsSUFBSSxPQUFBLEFBQU8sVUFBUCxBQUFpQixlQUFlLE9BQU8sT0FBUCxBQUFjLFFBQWxELEFBQTJELGFBQWMsQUFDckU7QUFDQTtXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFFL0I7QUFKRCxPQUlPLEFBQ0g7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNiLEFBR0o7O1dBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDbkI7QUFHRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaWplc2hwL015V29yay9FdGhlcmV1bS9FdGhlcnVtUHJhY3RpY2VfQ291cmNlMy9raWNrc3RhcnRlciJ9