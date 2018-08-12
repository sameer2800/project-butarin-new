import React , {Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button , Input, Message, TextArea, Card} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import OnlineJudge from '../../ethereum/factory';
import { Link,Router } from '../../routes';

class NewProblem extends Component {

    state = {
        value :'' ,
        title : '',
        description : '' ,
        publicKey : '' ,
        errorMsg : '' ,
        testCases: '',
        loading : false
    }

    onSubmit = async(event) => {
        event.preventDefault();

        try {
        this.setState({loading: true, errorMsg : ''})  
        
        const accounts = await web3.eth.getAccounts();
        await OnlineJudge.methods.createQuestion(this.state.title, this.state.description, this.state.publicKey).
        send({from:  accounts[0] , value : this.state.value});
        
        Router.pushRoute('/compete/home/');        

        //  console.log(this.state.description + " "  + this.state.publicKey +  " " + web3.eth.defaultAccount);   
        //  OnlineJudge.methods.createQuestion(this.state.description, this.state.publicKey).
        //             send({from: web3.eth.defaultAccount});

        // console.log("before fetching")    

        // const campaignsList =   await OnlineJudge.methods.deployedQuestions(1).call() ;    

        // console.log("campaign lists " + campaignsList);


        // this.props.history.push('/compete');
        }catch(err) {
            this.setState({errorMsg : err.message}); 
        }  
        this.setState({loading: false});   
    }    

    render() {
        return (
            <Layout>
               <h3> create a new problem </h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                    <label>Problem Statement</label>
                    <Input 
                        value = {this.state.title}
                        onChange = {event => this.setState({title : event.target.value})}
                    />
                </Form.Field>

                 <Form.Field >
                    <label>Problem Description</label>
                    <TextArea autoHeight placeholder='Try adding multiple lines'  value={this.state.description}
                    onChange = { event => {this.setState({description : event.target.value}) }} 
                    />
                </Form.Field>

                <Form.Field>
                    <label>Price Money </label>
                    <Input 
                        value = {this.state.value}
                        label='wei'   labelPosition='right'
                        onChange = {event => this.setState({value : event.target.value})}
                    />
                </Form.Field>



                <Form.Field>
                    <label> Encryption key (key for encrypting user submissions) </label>
                    <Input 
                        value = {this.state.publicKey}
                        onChange = {event => this.setState({publicKey : event.target.value})}
                    />
                </Form.Field>


                 <Form.Field>
                    <label>Test cases code </label>
                    <TextArea autoHeight placeholder='Try adding multiple lines'  value={this.state.testCases}
                    onChange = { event => {this.setState({testCases : event.target.value}) }} 
                    />
                </Form.Field>


                <Message error header="OOPS!!" content= {this.state.errorMsg}/>
                <Button primary loading={this.state.loading}>Submit Problem</Button>
            </Form>

              </Layout>
        )
    }
}


export default NewProblem;
