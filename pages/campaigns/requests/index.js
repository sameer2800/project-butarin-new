import React , {Component} from 'react';
import Layout from '../../../components/Layout';
import {Card , Button , Grid, Table } from 'semantic-ui-react';
import {Link} from '../../../routes';
import getCampaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
import { request } from 'https';

class RequestIndex extends Component {

    static async getInitialProps(props) {
        const address = props.query.address;

        const campaign = getCampaign(address);

        const requestsCount = await campaign.methods.getRequestsCount().call(); 
        const contributorsCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestsCount)).fill().map( (element, index) => {
                return campaign.methods.requests(index).call()
            } )
        );

       // console.log(requests)

        return {address : address , 
            requests : requests ,
            requestsCount,
            contributorsCount

        };
    }

    renderRows = () => {
        return this.props.requests.map( (request,index ) => {
            return <RequestRow
                key={index}
                id = {index}
                request={request}
                address={this.props.address}
                contributorsCount = {this.props.contributorsCount}
            />
        })
    }

    render() {

        const { Header, Row, HeaderCell, Body} = Table;

        return (
            <Layout>
                <h3>Requests index</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary> Add Requests </Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount (Ether)</HeaderCell>
                            <HeaderCell>Receipient</HeaderCell>
                            <HeaderCell>ApprovalCount</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
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

export default RequestIndex;