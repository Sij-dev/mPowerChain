const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactoryContract = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider (
    'crater dad rabbit lounge host position cup spice coin useful drastic lyrics',
    'https://rinkeby.infura.io/gnuK7wSZjunUiGS39i41'
);

const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('Deploying the contract from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactoryContract.interface))
    .deploy({data: compiledFactoryContract.bytecode})
    .send({from: accounts[0], gas : '1000000' });

    console.log('Contract deployed to', result.options.address);

};

deploy();
