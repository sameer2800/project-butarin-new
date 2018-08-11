import React , {Component} from 'react';
import Layout from '../../components/Layout';
import GetQuestion from '../../ethereum/campaign';
import {Card , Button , Grid, Divider , Container , List , Menu} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';
import LeaderBoard from './leaderBoard';
import SubmitSolution from './submitSolution';

class QuestionShow extends Component {

    state = { activeItem: 'leaderBoard' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    //recieves dynamic url info here
    static async getInitialProps(props) {
     //   console.log("hello show " + props.query.address);
        const question = GetQuestion(props.query.address);

        const getQuestionDetails = await question.methods.getSummary().call();
        
        return {
            address : props.query.address,
            manager : getQuestionDetails[0],
            questionTitle : getQuestionDetails[1],
            questionDescription : getQuestionDetails[2] ,
            balance : getQuestionDetails[3],
            participantsCount : getQuestionDetails[4],
            managerKey : getQuestionDetails[5],
           
           
        };
    }

    render() {

        var pageDetails = null;
        if(this.state.activeItem === 'description') {

            pageDetails = <div> {this.props.questionDescription} </div>
        }else if(this.state.activeItem === 'submit') {
            console.log("addrs show problem " +  this.props.address)
            pageDetails = <SubmitSolution  contractAddress={this.props.address}  />
        }else if(this.state.activeItem === 'leaderBoard') {
            pageDetails = <LeaderBoard  contractAddress={this.props.address} participantsCount= {this.props.participantsCount} />
        }
       

        return ( 
        <Layout>
            <h3> {this.props.questionTitle}</h3>
            
            <List celled horizontal>
                <List.Item>  price money :  <strong>{ web3.utils.fromWei(this.props.balance, 'ether') }  </strong>   ether </List.Item>
                <List.Item>Total Solution submitted : <strong> {this.props.participantsCount} </strong> </List.Item>
                <List.Item>Manager address : <strong> {this.props.manager }  </strong>  </List.Item>
            </List> 
            
            
                <Menu tabular>
                    <Menu.Item name='description' active={this.state.activeItem === 'description'} onClick={this.handleItemClick} />
                    <Menu.Item name='submit' active={this.state.activeItem === 'submit'} onClick={this.handleItemClick} />
                    <Menu.Item name='leaderBoard' active={this.state.activeItem === 'leaderBoard'} onClick={this.handleItemClick} />
                 </Menu>  


                {pageDetails}
        
        </Layout>  
        )  
    }
}

export default QuestionShow;