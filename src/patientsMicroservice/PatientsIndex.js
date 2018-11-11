import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPatient } from './store/actions';

class Patients extends Component {

    constructor(props){
        super(props);


        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getPatient();
        console.log(this.props);
    }

    render (){
        console.log('INSIDE PATIENT MICROSERVICE')
        return (
            <div>
                <h1>Patients Microservice</h1>
                <Button
                    onClick={this.onButtonClick}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        patientReducers:state.patientReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getPatient }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);