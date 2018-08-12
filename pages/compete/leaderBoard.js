import React , {Component} from 'react';
import Layout from '../../components/Layout';
import GetQuestion from '../../ethereum/campaign';
import {Card , Button , Grid, Divider , Container , List , Menu , Table} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';


class leaderBoard extends Component {

    state = {       
        userDetails : []
    }
    
    async componentDidMount () {
        console.log("question address " + this.props.contractAddress )
        const question = GetQuestion(this.props.contractAddress);

       
        const userDetails = [];

       for(var i =0; i < this.props.participantsCount; i++) {
        const address = await question.methods.participants(i).call();
        console.log( "adresss of participants " + address);
        const getparticipantdetails = await question.methods.getParticipantDetails(address).call();
       
        const userDetail = {
            address : address,
            username : getparticipantdetails[0],
            gasUsed : getparticipantdetails[2]
        }

        userDetails.push(userDetail);
       }

       console.log(userDetails);

       this.setState({
            userDetails : userDetails
    }) 
      
        
    }

    renderRows() {

        const { Header, Row, HeaderCell, Body, Cell} = Table;


        return this.state.userDetails.sort((a, b) => a.gasUsed > b.gasUsed).map( (user,index ) => {
            console.log(user)
            return (
                 <Row key={index}>
                  
                <Cell> {user.username}</Cell>
                <Cell> {user.address} </Cell>
                <Cell> {user.gasUsed} </Cell>
            </Row>) 
        })

    }

    render() {

        const { Header, Row, HeaderCell, Body} = Table;

        return (
            
            <Table>
                    <Header>
                        <Row>
                            <HeaderCell>UserID</HeaderCell>
                            <HeaderCell>User Address</HeaderCell>
                            <HeaderCell>Gas Used</HeaderCell>
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