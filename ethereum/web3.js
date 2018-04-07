//const Web3 = require('web3');
import Web3 from 'web3';

let web3;

// const web3 = new Web3(provider);

if (typeof window != 'undefined' && typeof window.web3  != 'undefined' ) {
    // we are in the browser && metamask is running
    web3 = new Web3(window.web3.currentProvider);

} else {
    // we are on the server or the user in not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/gnuK7wSZjunUiGS39i41'
    );

    web3 = new Web3(provider);
}


export default web3;