import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  getHR } from './store/actions';




class HR extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            name: " ",
            email: " "
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(){
        getHR()
        console.log(this.props)

    }

    render(){
        return (
            <div  >
                <h1>HR Microservice</h1>
                <Button
                    onClick={this.onFormSubmit}
                >action</Button>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return{
        hrReducers:state.hrReducers
    }  
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({  getHR }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HR);

