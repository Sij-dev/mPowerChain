import web3 from './web3';
import compiledFactoryContract from './build/CampaignFactory.json' ;

const instance = new web3.eth.Contract(
   JSON.parse(compiledFactoryContract.interface),
   '0xAa0eff76740bf4d5299C71b8FB9DFCF7B1aEc7df'
);

export default instance;