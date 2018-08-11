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
            questionDescription : getQuestionDetails[1] ,
            balance : getQuestionDetails[2],
            participantsCount : getQuestionDetails[3],
            managerKey : getQuestionDetails[4],
           
           
        };
    }

    renderCards() {
        const items = [
            {
                header : this.props.manager ,
                meta : 'Address of Manager' ,
                description : 'Manager created this question',
                style : {overflowWrap: 'break-word'}
            },
            {
                header : this.props.balance ,
                meta : 'Bounty (ether)' ,
                description : 'Solution with lowest transaction gas receives this bounty',
                style : {overflowWrap: 'break-word'}
            },
            {
                header : this.props.participantsCount ,
                meta : 'Number of contributors' ,
                description : 'Number of contributors who already contributed to this campaign',
                style : {overflowWrap: 'break-word'}
            },
            {
                header : web3.utils.fromWei(this.props.balance, 'ether') ,
                meta : 'Campaign Balance (ether)' ,
                description : 'This balance shows how much money is left with contract to spend',
                style : {overflowWrap: 'break-word'}
            }
        ]

        return ( <Card.Group items={items} />  );
    }

    render() {

        var pageDetails = null;
        if(this.state.activeItem === 'description') {

            pageDetails = <div> {this.props.questionDescription} </div>
        }else if(this.state.activeItem === 'submit') {
            console.log("addrs show problem " +  this.props.address)
            pageDetails = <SubmitSolution  contractAddress={this.props.address}  />
        }else if(this.state.activeItem === 'leaderBoard') {
            pageDetails = <LeaderBoard />
        }
       

        return ( 
        <Layout>
            <h3> {this.props.questionDescription}</h3>
            
            <List celled horizontal>
                <List.Item>  Bounty : { web3.utils.fromWei(this.props.balance, 'ether') }     ether </List.Item>
                <List.Item>Total Solution submitted : {this.props.participantsCount} </List.Item>
                <List.Item>Manager address : {this.props.manager }   </List.Item>
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