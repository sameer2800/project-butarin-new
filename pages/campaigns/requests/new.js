import React , {Component} from 'react';
import Layout from '../../../components/Layout';
import {Form, Button , Input, Message} from 'semantic-ui-react';
import getCampaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link,Router } from '../../../routes';

class RequestNew extends Component {

    state = {
        value :'' ,
        description : '' ,
        receipient : '' ,
        errorMsg : '' ,
        loading : false
    }

    static async getInitialProps(props) {
        const address = props.query.address;

        return {address : address};
    }

    onSubmit = async(event) => {
        event.preventDefault();

        this.setState( {loading: true, errorMsg :'' })
        const campaign = getCampaign(this.props.address);

        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest( 
                this.state.description ,
                web3.utils.toWei(this.state.value, 'ether'),
                this.state.receipient)
                .send({ from : accounts[0] });

                Router.pushRoute(`/campaigns/${this.props.address}/requests`);    
        }catch(err) {
            
            this.setState({errorMsg : err.message})
        }

       this.setState( {loading: false })
     //   await 
    }

    render() {
        return (
            <Layout>
            <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                    back
                </a>
            </Link>

            <h3>create a New Request !!</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        value = {this.state.description}
                        onChange = {event => this.setState({description : event.target.value})}
                    />
                </Form.Field>

                <Form.Field>
                    <label>value in ether</label>
                    <Input 
                        value = {this.state.value}
                        onChange = {event => this.setState({value : event.target.value})}
                    />
                </Form.Field>

                <Form.Field>
                    <label>receipient address</label>
                    <Input 
                        value = {this.state.receipient}
                        onChange = {event => this.setState({receipient : event.target.value})}
                    />
                </Form.Field>
                <Message error header="OOPS!!" content= {this.state.errorMsg}/>
                <Button primary loading={this.state.loading}> Create Request</Button>
            </Form>
            </Layout>
        )
    }

}

export default RequestNew;