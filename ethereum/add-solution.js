const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const questionInterface = require('./build/Question.json')

const provider = new HDWalletProvider(
    'clock accident inflict print fantasy cook push dust boy injury sense mixture',
    'https://rinkeby.infura.io/v3/cb8a853ebeeb4a879d63af88929fbf9e'
  );
  
const web3 = new Web3(provider);

add_solution = async () => {
    const question = await new web3.eth.Contract(JSON.parse(questionInterface.interface), );
    const desc = await question.methods.questionDescription().call();
    console.log(desc);
}

add_solution();
