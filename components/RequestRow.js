import React, {Component} from 'react';
import {Table , Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import CampaignInstance from '../ethereum/campaign';


class RequestRow extends Component {

    onApprove = async () => {

        const campaignInstance = CampaignInstance(this.props.address);
        const accouts = await web3.eth.getAccounts();
        await campaignInstance.methods.approveRequest(this.props.id).send({
            from : accouts[0]
        });
    }

    onFinalize = async () => {
        const campaignInstance = CampaignInstance(this.props.address);
        const accouts = await web3.eth.getAccounts();
        await campaignInstance.methods.finalizeRequest(this.props.id).send({
            from : accouts[0]
        });
    }

    render() {
        
        const {Row,Cell} = Table;
        const {id,request,approversCount,address} = this.props;
        const readyToFinalize = request.approvalCount > approversCount /2 ;

        return (
            <Row disabled = {request.complete} positive = {readyToFinalize && !request.complete} > 
                <Cell> {id} </Cell>
                <Cell> {request.description} </Cell>
                <Cell> {web3.utils.fromWei(request.value,'ether')} </Cell>
                <Cell> {request.recipient} </Cell>
                <Cell> {request.approvalCount}/ {approversCount}  </Cell>
                <Cell>
                    { request.complete ? null : (
                            <Button color ="green" basic onClick ={this.onApprove}>
                                Approve 
                            </Button>
                        )
                    }
                </Cell>
                <Cell>     
                    { request.complete ? null : (                
                            <Button color ="teal" basic onClick ={this.onFinalize}>
                                Finalize 
                            </Button> 
                        )
                    }
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;