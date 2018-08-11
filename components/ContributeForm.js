import React , {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import GetCampaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component {

    state = {
        value : '' ,
        loading : false,
        errorMessage : ''
    }

    onSubmit =  async (event) => {
        event.preventDefault();    
        
        this.setState({loading : true , errorMessage : ''})
        const campaign = await GetCampaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({ 
                from : accounts[0] , 
                value : web3.utils.toWei(this.state.value, 'ether') 
            })
            Router.replaceRoute(`/campaigns/${this.props.address}`) 

        }catch (err) {
              console.log("error while contributing " + err)  
              this.setState({errorMessage : err.message})
        }

        this.setState({loading : false , value : ''})
    }

    render() {

        return(
            <Form  onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
                <Form.Field >
                    <label>Amount to contribute</label>
                    <Input label="ether" 
                    labelPosition="right"   
                    value={this.state.value}
                    onChange = { event => {this.setState({value : event.target.value}) }}
                    />
                </Form.Field>
                
                <Message error header="Oops!!" content={this.state.errorMessage} />
                <Button primary loading= {this.state.loading}>
                    contribute!
                </Button>

            </Form>
        )

    }

}

export default ContributeForm;