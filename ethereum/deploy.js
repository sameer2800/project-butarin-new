const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const compiledFactory = require('./build/onlineJudge.json')
//const {interface, bytecode} = require ('./compile.js');

const provider = new HDWalletProvider(
  'document first drill person muffin derive stumble just vessel prevent cotton surface',
  'https://rinkeby.infura.io/jXHLiLZ7ue2K1sv45YQA'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts =  await web3.eth.getAccounts();

 console.log('hello account address is :' + accounts[0]);

  const onlineJudgeContract = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).
                      deploy( { data : '0x' + compiledFactory.bytecode}).
                      send( {from : accounts[0] , gas : '3000000' });

  // const step1 = await new web3.eth.Contract(JSON.parse(compiledFactory.interface));

  // console.log("step1 " + step1);
  // const step2 = await step1.deploy( { data : compiledFactory.bytecode});
  // console.log("step2 " + step2);
  // const step3 = await step2.send( {from : accounts[0] , gas : '7000000' });
  // console.log("step3 " + step3);
  //console.log('contract abi' + interface);
 console.log('contract deployed to : ' + onlineJudgeContract.options.address);

};
deploy();
