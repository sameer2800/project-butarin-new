/**
 * Created by kbr0003 on 28/07/18.
 */
import web3 from './web3';
import CampaginFactory from './build/onlineJudge.json';

const instance = new web3.eth.Contract(JSON.parse(CampaginFactory.interface) ,
    '0xbdbd66a7cec1e9d2e2451b9de78bb1a5b3001cd5');

export default instance;
