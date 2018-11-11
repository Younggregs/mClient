import React, { Component } from 'react';
//import ReactDOM from 'react-dom'
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  } from '../../store/actions';


import './Login.css';

class Login extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            name: " ",
            email: " "
        }

        this.onNameChange = this.onNameChange.bind(this);
        //this.onEmailChange = this.onEmailChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onNameChange = (event)=>{  
        console.log(event.target) 
        let newName = event.target.value

        const newState = Object.assign({}, this.state)
     
        this.setState({...newState.name, newName})
    }

    onFormSubmit(){
        //event.preventDefault();
        //getName();
     
        this.setState({...this.state, name:this.props.doctorReducers.name});
        alert(this.state.name);
        console.log(this.props)

    }

    //onEmailChange(event){
        
    //}

    render(){
        return (
            <div className="Login" >
                <h1>HR Microservice</h1>
                <Button>action</Button>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return{
        doctorReducers:state.doctorReducers
    }  
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

