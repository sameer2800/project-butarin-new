import React , {Component} from 'react';
import Layout from '../../components/Layout';
import GetCampaign from '../../ethereum/campaign';
import {Card , Button , Grid} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {

    //recieves dynamic url info here
    static async getInitialProps(props) {
     //   console.log("hello show " + props.query.address);
        const campaign = GetCampaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            address : props.query.address,
            minimumContribution : summary[0] ,
            balance : summary[1],
            requestsCount : summary[2],
            approversCount : summary[3],
            manager : summary[4]
        };
    }

    renderCards() {
        const items = [
            {
                header : this.props.manager ,
                meta : 'Address of Manager' ,
                description : 'Manager created this campaign and can create requests to withdraw money',
                style : {overflowWrap: 'break-word'}
            },
            {
                header : this.props.minimumContribution ,
                meta : 'Minimum Contribution (wei)' ,
                description : 'U must contribute atleast this much wei to become contributor',
                style : {overflowWrap: 'break-word'}
            },
            {
                header : this.props.requestsCount ,
                meta : 'Number of requests' ,
                description : 'A request tries to withdraw money from contract. Requests must be approved by contributors',
                style : {overflowWrap: 'break-word'}
            } ,
            {
                header : this.props.approversCount ,
                meta : 'Number of contributors' ,
                description : 'Number of contributors who already contributed to this campaign',
                style : {overflowWrap: 'break-word'}
            },
            {
                header : web3.utils.fromWei(this.props.balance, 'ether') ,
                meta : 'Campaign Balance (ether)' ,
                description : 'This balance shows how much money is left with contract to spend',
                style : {overflowWrap: 'break-word'}
            }
        ]

        return ( <Card.Group items={items} />  );
    }

    render() {
        return ( 
        <Layout>
        <h3>CampaignShow !! </h3>

        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    {this.renderCards()}
                   
                </Grid.Column>
                

                <Grid.Column width={6}> 
                    <ContributeForm address={this.props.address}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                     <Link route={`/campaigns/${this.props.address}/requests`} >
                        <a>
                            <Button primary >View Requests</Button>
                        </a>    
                    </Link>
                    </Grid.Column>
            </Grid.Row>

        </Grid>
        
        
        </Layout>  
        )  
    }
}

export default CampaignShow;