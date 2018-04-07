const path = require ('path');
const fs = require ('fs-extra');
const solc = require ('solc');

const buildPath = path.resolve(__dirname, 'build');
//clean up the build directory and delete the entire build directory 
fs.removeSync(buildPath);

const campaignPath =  path.resolve(__dirname, 'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf8');

// compile contract file and extract only the contract fromt the outputs
const output = solc.compile(source,1).contracts;

//recreate the build directory
fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}

