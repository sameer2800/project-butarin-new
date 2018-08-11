/**
 * Created by kbr0003 on 28/07/18.
 */
import web3 from './web3';
import CampaginFactory from './build/onlineJudge.json';

const instance = new web3.eth.Contract(JSON.parse(CampaginFactory.interface) ,
    '0x98c2407f2af1e593489367100f9e0cc6944cb1d0');

export default instance;
