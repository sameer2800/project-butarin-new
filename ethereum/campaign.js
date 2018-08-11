import web3 from './web3';
import Question from './build/Question.json';

const getQuestion = (address) => {
    const instance = new web3.eth.Contract(JSON.parse(Question.interface) ,
    address);
    return instance;

}

export default getQuestion;
