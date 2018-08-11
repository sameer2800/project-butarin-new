import React , {Component} from 'react';
import Layout from '../../components/Layout';
import GetQuestion from '../../ethereum/campaign';
import {Card , Button , Grid, Divider , Container , List , Menu , Table} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';


class leaderBoard extends Component {

    state = {
        participants : [] ,
        usernames : [],
        gas : []
    }
    
    async componentDidMount () {
        console.log("question address " + this.props.contractAddress )
        const question = GetQuestion(this.props.contractAddress);

        const participantsAddress = [];
        const users = [];
        const gasUsed = [];

       for(var i =0; i < this.props.participantsCount; i++) {
        const address = await question.methods.participants(i).call();
        console.log( "adresss of participants " + address);
        const getparticipantdetails = await question.methods.getParticipantDetails(address).call();
        participantsAddress.push(address);
        users.push(getparticipantdetails[0]);
        gasUsed.push(getparticipantdetails[2]);

        
       }

       this.setState({participants : participantsAddress,
            usernames : users,
            gas : gasUsed
    }) 
      
        
    }

    renderRows() {

        const { Header, Row, HeaderCell, Body, Cell} = Table;

        return this.state.participants.map( (address,index ) => {
            return (
                 <Row>
                <Cell> {this.state.usernames[index]}</Cell>
                <Cell> {address} </Cell>
                <Cell> {this.state.gas[index]} </Cell>
            </Row>) 
        })
    }

    render() {

        const { Header, Row, HeaderCell, Body} = Table;

        console.log("leaderboard  " + this.props.getParticipants)
        return (
            
            <Table>
                    <Header>
                        <Row>
                            <HeaderCell>UserID</HeaderCell>
                            <HeaderCell>User Address</HeaderCell>
                            <HeaderCell>Gas Consumption (best solution)</HeaderCell>
                        </Row>
                    </Header>

                    <Body>
                        {this.renderRows()}
                    </Body>

                </Table>

        )
    }

}

export default leaderBoard;