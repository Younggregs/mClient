import React, { Component } from 'react';
import {  Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './DashBoard';
import Login from './auth/component/Login';



//let route

class App extends Component {
  
  state = {
    status: null,
    token: null,
    user: null,
    isLoggedIn: false
  }


componentWillMount(){
  ///*
  if( this.props.data !== null ){
  this.setState({
    ...this.state,
    status: this.props.data.status,
    token: this.props.data.token,
    user: this.props.data.data,
    isLoggedIn: this.props.data.token === null ? true : false
  })
}
//*/
  console.log('COMPONENT WILL MOUNT',this.props)
}

  render(){
    let route
    if(!this.state.isLoggedIn){
      route = (
        <Switch>
          <Redirect to='/dashboard' from='/login'/>
        </Switch>
      )
    }
    else {
        route = ( 
        <Switch>
            <Redirect to='/login' from='/dashboard' />
        </Switch>
      )
    }
    console.log('INSIDE APP STATE',this.props)
    return(
      <div>
        {route}
        <Switch>
          <Route exact path='/login' component={ Login }/>
          <Route  path='/dashboard' component={ Dashboard }/>
        </Switch>
      </div>
    )       
  }
}


export default App;
