import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWallet } from './store/actions';

class Wallet extends Component {

    constructor(props){
        super(props);


        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getWallet();
        console.log(this.props);
    }

    render (){
        return (
            <div>
                <h1>Wallet Microservice</h1>
                <Button
                    onClick={this.onButtonClick}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        walletReducers: state.walletReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getWallet }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);