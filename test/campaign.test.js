const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json')
const compiledContract= require('../ethereum/build/Campaign.json')

let accounts;
let factory;
let campaignAddress;
let campaign;


beforeEach( async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).
    deploy( {data : compiledFactory.bytecode}).
    send({from : accounts[0] , gas : '1000000'});

    await factory.methods.createCampaign('100').send( {from : accounts[0] , gas : '1000000'});

    const addresses = await factory.methods.getDeployedContracts().call();
    campaignAddress = addresses[0];

    campaign = await new web3.eth.Contract(JSON.parse(compiledContract.interface) ,campaignAddress);

})

describe('campaigns' , () => {
  it('deploys a factory & contract' , () => {
    assert.ok(factory.options.address)
      assert.ok(campaign.options.address)
  })

  it('marks caller as manager', async() => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  })

  it('verify contribute', async () => {
    await campaign.methods.contribute().send({
      value : '200' ,
      from : accounts[1]
    })

      const contributor = await campaign.methods.approvers(accounts[1]).call();

      assert(contributor);
  } )

  it('requires a minimum contribution', async () => {

      try {
        await campaign.methods.contribute().call({value : '50' , from : accounts[1]})
        assert(false);
      }catch (err) {
        assert(true);
      }
  })

  it('manager makes request', async () => {
    await campaign.methods.createRequest('buy batteries', '100' , accounts[1] ).send( {from : accounts[0] , gas : '1000000'});

    const request = await campaign.methods.requests(0).call();
    assert.equal('buy batteries' ,request.description);
  })

})
