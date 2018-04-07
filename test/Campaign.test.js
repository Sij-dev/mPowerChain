const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactoryContract = require('../ethereum/build/CampaignFactory.json');
const compiledCampaignContract = require('../ethereum/build/Campaign.json');

let accounts;
let factoryInstance;
let campaignInstance;
let campaignAddress;


beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factoryInstance = await new web3.eth.Contract(
        JSON.parse(compiledFactoryContract.interface))
        .deploy({data: compiledFactoryContract.bytecode})
        .send({from: accounts[0], gas : '1000000' });

    await factoryInstance.methods.createCampaign('100')
        .send({ from: accounts[0],gas : '1000000' });

    [campaignAddress] = await factoryInstance.methods.getDeployedCampaigns().call();

    campaignInstance = await new web3.eth.Contract(
        JSON.parse(compiledCampaignContract.interface),
        campaignAddress
    );

});

describe('Campaigns' , () => {
    it(' Deploy a factory and campaign ', () => {
        assert.ok(factoryInstance.options.address);
        assert.ok(campaignInstance.options.address);
    });
});


