import React , {Component} from 'react';
import {Card , Button , Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import getCampaign from '../ethereum/campaign';

class RequestRow extends Component {

    onApprove = async () => {
        const campaign = getCampaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from : accounts[0]
        });
    }

    onFinalize = async () => {
        const campaign = getCampaign(this.props.address); 
        const accounts = await web3.eth.getAccounts();

        await campaign.methods.finalizeRequest(this.props.id).send({
            from : accounts[0]
        });

    }

    render() {

        const {Row, Cell} = Table;
        const {description, value ,recipient , approvalCount } = this.props.request;
         return(
            <Row>
                <Cell> {this.props.id}</Cell>
                <Cell> {description} </Cell>
                <Cell>{web3.utils.fromWei(value, 'ether' )}</Cell>
                <Cell>{recipient}</Cell>
                <Cell>  {approvalCount}/ {this.props.contributorsCount}</Cell>
                <Cell> 
                    <Button color="green" basic onClick = {this.onApprove}>
                        Approve
                    </Button>
                </Cell>
                <Cell> 
                    <Button color="teal" basic onClick = {this.onFinalize}>
                        Finalize
                    </Button>
                </Cell>
            </Row>            
        )
    }

}

export default RequestRow;