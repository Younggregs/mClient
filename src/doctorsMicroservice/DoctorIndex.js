import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getName } from './store/actions';

class Doctors extends Component {

    constructor(props){
        super(props);


        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getName();
        console.log(this.props)
    }

    render (){
        return (
            <div>
                <h1>Doctors Microservice</h1>
                <Button
                    onClick={this.onButtonClick}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        doctorReducers:state.doctorReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getName }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);