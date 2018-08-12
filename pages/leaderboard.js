import React , {Component} from 'react';
import Layout from '../components/Layout';
import GetQuestion from '../ethereum/campaign';
import {Card , Button , Grid, Divider , Container , List , Menu , Table} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import ContributeForm from '../components/ContributeForm';
import {Link} from '../routes';
import factory from '../ethereum/factory';


class userLeaderBoard extends Component {

    state = {       
        userDetails : []
    }
    
    async componentDidMount () {
       
        const tokenHoldersList =   await factory.methods.getTokenHolders().call() ;
       
        const userDetails = [];

       for(var i =0; i < tokenHoldersList.length; i++) {
        const tokenValue = await factory.methods.addressToTokens(tokenHoldersList[i]).call() ;
        console.log( "adresss of participants " + tokenHoldersList[i]);
        
       
        const userDetail = {
            address : tokenHoldersList[i],
            tokens : tokenValue
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

        return this.state.userDetails.sort((a, b) => a.tokens < b.tokens).map( (user,index ) => {
            console.log(user)
            return (
                 <Row key={index}>                 
                <Cell> {user.address}</Cell>
                <Cell> {user.tokens} </Cell>           
            </Row>) 
        })

    }

    render() {

        const { Header, Row, HeaderCell, Body} = Table;

        return (
            <Layout>
            <Table>
                    <Header>
                        <Row>
                            <HeaderCell>User Address</HeaderCell>
                            <HeaderCell> Total tokens</HeaderCell>
                        </Row>
                    </Header>

                    <Body>
                        {this.renderRows()}
                    </Body>

                </Table>
            </Layout>  

        )
    }

}

export default userLeaderBoard;