import React , {Component} from 'react';
import factory from '../../ethereum/factory';
import {Card , Button} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import {Link} from '../../routes';
import GetQuestion from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Image } from 'semantic-ui-react'

class CompeteIndex extends Component {

    // state = {
    //     campaignsList : null
    // }

    // this renders on server and passes props to this class on browser
    static async getInitialProps () {
        const questionsListAddress =   await factory.methods.getDeployedQuestions().call() ;

        var questionsTitles = [];
        var questionsPrice =[];
        
        for(var i = 0; i < questionsListAddress.length; i++) {
            const question = GetQuestion(questionsListAddress[i]);
            const summaryDetails = await question.methods.getSummary().call();
          //  const balance = await question.methods.getBalance().call();
          questionsTitles.push(summaryDetails[1]);
            questionsPrice.push(summaryDetails[3]);
        }

        // for(var i = 0; i < questionsListAddress.length; i++) {
        //     const question = GetQuestion(questionsListAddress[i]);
        //     const balance = await question.methods.getBalance().call();
        //     questionsPrice.push(balance);
        // }
        
        return {questionsListAddress, questionsTitles , questionsPrice }
    }


    renderCampaigns = () => {

        this.props.questionsTitles.map ( val => {
            console.log("question " + val);
        } )

        console.log( this.props.questionsTitles[1])

        var  filteredAddressIndexes = [];

        for(var i =0;i < this.props.questionsListAddress.length; i++) {
          //  console.log(this.props.questionsPrice[i])
            if(this.props.questionsPrice[i] !== '0'){
                filteredAddressIndexes.push(i)
            }
                  
        }  


        const items = filteredAddressIndexes.map((index) => {
            return{
                key : index,
                header : this.props.questionsTitles[index] ,
                meta : "Prize Money: " + web3.utils.fromWei(this.props.questionsPrice[index], 'ether') + "  Ether",
                description : ( 
                    <Link route={`/compete/${this.props.questionsListAddress[index]}`}>
                        <a>View Question Details </a>
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
                
                <h3>Open Competitions !!</h3>
                <Image size='large' src={'http://localhost:9991/static/space.svg'} fluid centered />


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

export default CompeteIndex;