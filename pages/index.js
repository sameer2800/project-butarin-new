import React , {Component} from 'react';
import factory from '../ethereum/factory';
import {Card , Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';

class CampaignIndex extends Component {

    // state = {
    //     campaignsList : null
    // }

    // this renders on server and passes props to this class on browser
    static async getInitialProps () {
        const campaignsList =   await factory.methods.getDeployedContracts().call() ;
        return {campaignsList }
    }


    renderCampaigns = () => {
        const items = this.props.campaignsList.map(address => {
            return{
                header : address ,
                description : ( 
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
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
                

                <div>Open Campaigns </div>

                <Link route="/campaigns/new">
                 <a>   
                <Button  floated='right' content='Create Campaign' icon='add circle' primary />
                  </a>  
                </Link>

                {this.renderCampaigns()}
            </div>
            </Layout>
        )
    }

}

export default CampaignIndex;