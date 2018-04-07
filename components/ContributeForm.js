import React, {Component} from 'react';
import {Form, Input , Message, Button } from 'semantic-ui-react';
import CampaignInstance from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {

    state = {
        value:'',
        errorMessage: '',
        loading:false
    };

    onSubmit = async event => {
        event.preventDefault();
        const campaignInsatance = CampaignInstance(this.props.address);
        this.setState({loading : true , errorMessage: '' });

        try { 
            const accounts = await web3.eth.getAccounts();
            await campaignInsatance.methods.contribute().send({
                from: accounts[0],
                value : web3.utils.toWei(this.state.value,'ether')
            }); 

            Router.replaceRoute(`/campaigns/${this.props.address}`);

        } catch (err){
            this.setState({ errorMessage: err.message});
        
        }

        this.setState({loading : false, value: ''});

    };

    render () {
        return (
            <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                <Form.Field>
                    <label> Amount to Contribute </label>
                    <Input 
                        value = {this.state.value }
                        onChange = { event => {
                            this.setState({value: event.target.value})
                        }}
                        label='Ether'
                        labelPosition='right'
                        placeholder = 'Enter the amount'
                    />
                </Form.Field>
                <Message error header=" Campaign contriubution failed !!" content ={this.state.errorMessage} /> 
                <Button secondary loading={this.state.loading}>
                    Contribute
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;