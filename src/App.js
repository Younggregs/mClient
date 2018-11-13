import React, { Component } from 'react';
import {  Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './DashBoard';
import Login from './auth/component/Login';
import HospitalIndex from './hospitalMicroservice/HospitalIndex';
import LabIndex from './labsMicroservice/LabIndex';
import HRIndex from './hrMicroservice/HRIndex';
import DoctorIndex from './doctorsMicroservice/DoctorIndex';
import PatientsIndex from './patientsMicroservice/PatientsIndex';
import PharmacyIndex from './pharmacyMicroservice/PharmacyIndex';
import RadiographyIndex from './radiographyMicroservice/RadiographyIndex';
import WalletIndex from './walletMicroservice/WalletIndex';
import StoreIndex from './storeMicroservice/StoreIndex';

class App extends Component {
  state = {
    status: null,
    token: null,
    user: null,
    isLoggedIn: false
  }

componentWillMount(){
  if(this.props.data){
  this.setState({
    ...this.state,
    status: this.props.data.status,
    token: this.props.data.token,
    user: this.props.data.data,
    isLoggedIn: this.props.data.token === null ? true : false
  })
}
  console.log('COMPONENT WILL MOUNT',this.props)
}

  render(){
    let route
    if(!this.state.isLoggedIn){
      route = (
        <Switch>
          <Redirect to='/dashboard' from='/'/>
        </Switch>
      )
    }
    else {
        route = (
        <Switch>
            <Redirect to='/' from='/dashboard' />
        </Switch>
      )
    }
    console.log('INSIDE APP STATE',this.props)
    return(
      <div>
        {route}
        <Switch>
          <Route exact path='/' component={ Login }/>
          <Route exact path='/dashboard' component={ Dashboard }/>
          <Route exact path='/dashboard/hospitalMicroservice' component={HospitalIndex}/>
          <Route exact path='/dashboard/hrMicroservice' component={HRIndex}/>
          <Route exact path='/dashboard/doctorsMicroservice' component={DoctorIndex}/>
          <Route exact path='/dashboard/labsMicroservice' component={LabIndex}/>
          <Route exact path='/dashboard/patient' component={PatientsIndex}/>
          <Route exact path='/dashboard/pharmacyMicroservice' component={PharmacyIndex}/>
          <Route exact path='/dashboard/radiographyMicroservice' component={RadiographyIndex}/>
          <Route exact path='/dashboard/walletMicroservice' component={WalletIndex}/>
          <Route exact path='/dashboard/storeMicroservice' component={ StoreIndex }/>
        </Switch>
      </div>
    )
  }
}

export default App;
