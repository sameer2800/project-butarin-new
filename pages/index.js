import React , {Component} from 'react';
import factory from '../ethereum/factory';
import {Card , Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import GetQuestion from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Header, Icon, Image } from 'semantic-ui-react'

class CampaignIndex extends Component {

    
    // state = {
    //     campaignsList : null
    // }

    // this renders on server and passes props to this class on browser
    static async getInitialProps () {
        const questionsListAddress =   await factory.methods.getDeployedQuestions().call() ;

        var questionsDescriptions = [];
        var questionsPrice =[];
        
        for(var i = 0; i < questionsListAddress.length; i++) {
            const question = GetQuestion(questionsListAddress[i]);
            const description = await question.methods.getQuestionDescription().call();
            questionsDescriptions.push(description);
        }

        for(var i = 0; i < questionsListAddress.length; i++) {
            const question = GetQuestion(questionsListAddress[i]);
            const balance = await question.methods.getBalance().call();
            questionsPrice.push(balance);
        }
        
        return {questionsListAddress, questionsDescriptions , questionsPrice }
    }


    renderCampaigns = () => {

        this.props.questionsDescriptions.map ( val => {
            console.log("question " + val);
        } )

        console.log( this.props.questionsDescriptions[1])
        const items = this.props.questionsListAddress.map((address , index) => {
            return{
                key : address,
                header : this.props.questionsDescriptions[index] ,
                meta : "Prize Money: " + web3.utils.fromWei(this.props.questionsPrice[index], 'ether') + "  Ether",
                description : ( 
                    <Link route={`/compete/${address}`}>
                        <a>View Question Details</a>
                     </Link>
                 )
                 ,
                fluid : true
            }
        })

        return <Card.Group items={items} />
    }

    render () {

        return(

            <Layout>
            <div>
                <Image size='large' src={'http://localhost:9991/static/coding.svg'} fluid centered />
                <h2>Live competetions</h2>

                <Link route="/compete/newproblem">
                 <a>   
                <Button  floated='right' content='Create Question' icon='add circle' primary />
                  </a>  
                </Link>

                {this.renderCampaigns()}
            </div>
            </Layout>
        )
    }

}
export default CampaignIndex;