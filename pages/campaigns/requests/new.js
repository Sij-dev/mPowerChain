import React, {Component} from 'react';
import { Form, Button , Message , Input } from 'semantic-ui-react';
import CampaignInstance from "../../../ethereum/campaign";
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout';
import {Link, Router } from '../../../routes';


class RequestNew extends Component{

    state = {
        value : '',
        description : '',
        recipient : '',
        loading : false,
        errorMessage : ''

    };

    static async getInitialProps(props) {
       const {address }  = props.query;

       return {address : address};
    }

    onSubmit =  async event => {
        event.preventDefault();

        const campaignInstance = CampaignInstance(this.props.address);
        const { value,description,recipient } = this.state;

        this.setState({loading: true, errorMessage: '' });

        try { 
            const accounts = await web3.eth.getAccounts();
            await campaignInstance.methods.createRequest(
                description,
                web3.utils.toWei(value,'ether'),
                recipient
            ).send({from : accounts[0]});

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({loading: false });
    };

    render () {
        return ( 
            <Layout>

                <Link route = {`/campaigns/${this.props.address}/requests`}> 
                    <a> Back </a>
                </Link>

                <h3> Create a request to get approvals from the stakeholders </h3>

                <Form onSubmit = {this.onSubmit} error ={!!this.state.errorMessage}> 
                    <Form.Field> 
                        <label> Description </label>
                        <Input 
                            value ={this.state.description}
                            onChange = { event => this.setState({ description: event.target.value })}
                        />
                    </Form.Field> 
                    <Form.Field> 
                        <label> Value in Ether </label>
                        <Input 
                            value ={this.state.value}
                            onChange = { event => this.setState({ value: event.target.value })}
                        />
                    </Form.Field> 
                    <Form.Field> 
                        <label> Recipient </label>
                        <Input 
                            value ={this.state.recipient}
                            onChange = { event => this.setState({ recipient: event.target.value })}
                        />
                    </Form.Field> 
                    <Message error header = "Campaign Create request error" content={this.state.errorMessage} />
                    <Button secondary loading={this.state.loading} > Create </Button>
                </Form>
            </Layout>
        ) ;
    }

}


export default RequestNew;