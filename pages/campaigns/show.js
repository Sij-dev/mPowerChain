import React, {Component} from 'react';
import {Card ,  Grid , Button} from 'semantic-ui-react' ;
import Layout from '../../components/Layout';
import CampaignInstance from "../../ethereum/campaign";
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {

    static async getInitialProps(props) {
        const campaignInstance = CampaignInstance(props.query.address);
        const campaignSummary = await campaignInstance.methods.getSummary().call();
       // console.log(campaignSummary);

       return {
            address : props.query.address,
            minimumContribution : campaignSummary[0],
            contractBalance : campaignSummary[1],
            noOfRequest     : campaignSummary[2],
            noOfApprovers  : campaignSummary[3],
            contractManager : campaignSummary[4] 
       };
    }

    renderCards() {

        const {
            minimumContribution,
            contractBalance,
            noOfRequest,
            noOfApprovers,
            contractManager
        } = this.props;
       
        const items = [
            {
                header : contractManager ,
                meta : 'address of manager' ,
                description : 'Manager created this campaign and can create request to withdraw money ',
                style: { overflowWrap :  'break-word'}

            },

            {
                header : minimumContribution ,
                meta : ' Minimum contribution in Wei' ,
                description : ' You must contribute atlease this much Wei to become an approver ',
                style: { overflowWrap :  'break-word'}

            },

            {
                header : noOfRequest ,
                meta : ' No of requests' ,
                description : ' Request for withdrawing money from the contract. Request must be approved by the approvers',
                style: { overflowWrap :  'break-word'}

            },
            {
                header : noOfApprovers ,
                meta : ' No of approvers' ,
                description : ' Number of people doneted for this campaign',
                style: { overflowWrap :  'break-word'}

            },

            {
                header : web3.utils.fromWei(contractBalance,'ether') ,
                meta : ' Balance amount in ether' ,
                description : ' Available balance amount in the contract for spending ',
                style: { overflowWrap :  'break-word'}

            }
        ];

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout> 
                <h3> Campaign Show </h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}> 
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}> 
                            <ContributeForm address ={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route = {`/campaigns/${this.props.address}/requests`}> 
                                    <a> 
                                        <Button secondary>  View Request </Button>
                                    </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;