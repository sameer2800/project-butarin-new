import React , {Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button , Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Link,Router } from '../../routes';

class CampaignNew extends Component {

    state = {
        minContribution : '' ,
        errorMsg : '' ,
        loading : false
    };

     createCampaignHandler = async (event) => {
        event.preventDefault();
        console.log("hi there")
        try{
            this.setState({loading: true, errorMsg : ''})   
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minContribution).
                    send({ from : accounts[0] });
            
            Router.pushRoute('/');       
                
        }catch(err) {
               this.setState({errorMsg : err.message}); 
        }
        this.setState({loading: false})   

    }

    render () {
        
        
        return(
            <Layout>
                <h3> Create a campaign</h3>    
                <Form onSubmit={this.createCampaignHandler} error={!!this.state.errorMsg} >
                      <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label='wei'   labelPosition='right' value={this.state.minContribution}  onChange={event => this.setState({'minContribution' : event.target.value})} />    
                          
                      </Form.Field>  
                      
                      <Message error header='oops!!' content = {this.state.errorMsg }/>

                      <Button primary loading={this.state.loading}  > Create!</Button>  

                </Form>

                  
            </Layout>
            
        )
    }
}

export default CampaignNew;