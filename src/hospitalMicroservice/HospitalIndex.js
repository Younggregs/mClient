import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHospital } from './store/actions';


class Hospital extends Component {

    constructor(props){
        super(props);
        this.onButtonCLick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getHospital();
        console.log(this.props)
    }

    render (){
        console.log('INSIDE HOSPITAL MICROSERVICE')
        return (
            <div>
                <h1>Hospital Microservice</h1>
                <Button
                    onClick={() => this.onButtonClick()}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        hospitalReducers: state.hospitalReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getHospital }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospital);