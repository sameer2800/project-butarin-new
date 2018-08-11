import React , {Component} from 'react';
import Layout from '../../components/Layout';
import GetQuestion from '../../ethereum/campaign';
import {Card , Button , Grid, Divider ,Message, Container , List,Input , Menu, TextArea, Form} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';
import axios from 'axios';

class SubmitSolution extends Component {

    state = {
        username : '' ,
        solutionFile : '', 
        loading : false,
        errorMessage : '' ,
        submitted : false ,
        response : ''
    }

    onSubmit =  async (event) => {

        event.preventDefault();    

        this.setState({submitted : false})

        const accounts = await web3.eth.getAccounts();  

        this.setState({loading : true , errorMessage : ''})
       
        const postData = {
            solutionFile : this.state.solutionFile ,
            username : this.state.username ,
            contractAddress : this.props.contractAddress,
            userAddress : accounts[0]
           
        }

        const url = "https://jsonplaceholder.typicode.com/posts"

        console.log(postData);

        try {

            axios.post(url , postData).
            then( response => {
                this.setState({response : response})
                console.log(response) ;
                this.setState({loading : false })
                
            } ).
                catch( err => {                  
                    console.log(err);
                    this.setState({loading : false })                 
                }
            )

         //   Router.replaceRoute(`/campaigns/${this.props.address}`) 

        }catch (err) {
              console.log("error while contributing " + err)  
              this.setState({errorMessage : err.message})
              this.setState({loading : false })
        }
       
    }

    render() {
        return (
            <div> 
            <Form>
                
                
            </Form>

             <Form  onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
                <Form.Field >
                    <label>Enter your username </label>
                    <Input label="username" 
                    labelPosition="right"   
                    value={this.state.username}
                    onChange = { event => {this.setState({username : event.target.value}) }}
                    />
                </Form.Field>

                <Form.Field >
                    <label>Enter your solution </label>
                    <TextArea autoHeight placeholder='Try adding multiple lines'  value={this.state.solutionFile}
                    onChange = { event => {this.setState({solutionFile : event.target.value}) }} 
                    />
                </Form.Field>

                <Message error header="Oops!!" content={this.state.errorMessage} />
                <Button primary loading= {this.state.loading}>
                    Submit!
                </Button>

            </Form>

               

            </div>
        )
    }
}

export default SubmitSolution;