import React , {Component} from 'react';
import factory from '../ethereum/factory';
import {Card , Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import GetQuestion from '../ethereum/campaign';
import web3 from '../ethereum/web3';


class leaderBoard extends Component {

    render () {
        return (
            <Layout>
                <div>
                    "LeaderBoard here"
                </div>
            </Layout>
        )

    }
}

export default leaderBoard;