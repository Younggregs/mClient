import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLabName } from './store/actions';

class Lab extends Component {

    constructor(props){
        super(props);


        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick(){
        getLabName();
        console.log(this.props)
    }
    componentDidMount(){
        console.log('INSIDE LAB INDEX')
    }
    render (){
        return (
            <div>
                <h1>Lab Microservice</h1>
                <Button
                    onClick={this.onButtonClick}
                >action</Button>
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        labReducers: state.labReducers
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getLabName }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Lab);