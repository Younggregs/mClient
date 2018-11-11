import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStore } from './store/actions';

class Store extends Component {

    constructor(props){
        super(props);


        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getStore();
        console.log(this.props)
    }

    render (){
        return (
            <div>
                <h1>Store Microservice</h1>
                <Button
                    onClick={this.onButtonClick}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        storeReducers: state.storeReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getStore }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);