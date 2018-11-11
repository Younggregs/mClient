import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPharmacy } from './store/actions';

class Pharmacy extends Component {

    constructor(props){
        super(props);


        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getPharmacy();
        console.log(this.props);
    }

    render (){
        return (
            <div>
                <h1>Pharmacy Microservice</h1>
                <Button
                    onClick={this.onButtonClick}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        pharmacyReducers:state.pharmacyReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getPharmacy }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pharmacy);