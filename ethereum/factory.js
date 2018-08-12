/**
 * Created by kbr0003 on 28/07/18.
 */
import web3 from './web3';
import CampaginFactory from './build/onlineJudge.json';

const instance = new web3.eth.Contract(JSON.parse(CampaginFactory.interface) ,
    '0x6b2b2428f17cc6ebef27a4386affacf971f6b1ef');

export default instance;
