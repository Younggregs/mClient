import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import InfoCard from './common/components/InfoCard';
import Navbar from './common/components/NavBar';
import HospitalIndex from './hospitalMicroservice/HospitalIndex';
import LabIndex from './labsMicroservice/LabIndex';
import HRIndex from './hrMicroservice/HRIndex';
import DoctorIndex from './doctorsMicroservice/DoctorIndex';
import PatientsIndex from './patientsMicroservice/PatientsIndex';
import PharmacyIndex from './pharmacyMicroservice/PharmacyIndex';
import RadiographyIndex from './radiographyMicroservice/RadiographyIndex';
import WalletIndex from './walletMicroservice/WalletIndex';
import StoreIndex from './storeMicroservice/StoreIndex';

class DashBoard extends Component {

  componentDidMount(){
    console.log('INSIDE DASHBOARD', this.props)
  }
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {id: 1, 
//          link: '/patient',
          link: `${this.props.match.path}/patient`, 
          icon: 'search', 
          title: 'Patient', 
          width: 'uk-width-1-3@m', 
          desc: 'Create Patient Record or Search for existing patients',
         // component:'PatientsIndex'
        },
        {id: 2, 
          link: `${this.props.match.path}/doctorsMicroservice`, 
          icon: 'doctor', title: 'Doctors', 
          width: 'uk-width-1-3@m', 
          desc: 'Create/Attach Patient Document or Search/View existing documents',
          component: 'DoctorIndex'
        },
        {id: 3, 
          link: '/labsMicroservice', 
          icon: 'lab', 
          title: 'Laboratory', 
          width: 'uk-width-1-3@m', 
          desc: 'Messages and Notifications to patients',
          component: 'LabIndex'
        },
        {id: 4, 
          link: `${this.props.match.path}/hospitalMicroservice`, 
          icon: 'hospital', 
          title: 'Hospital', 
          width: 'uk-width-1-3@m', 
          desc: 'Schedule patient for appointment and other events',
          component: 'HospitalIndex'
        },
        {id: 5, 
          link: `${this.props.match.path}/pharmacyMicroservice`, 
          icon: 'pills', 
          title: 'Pharmacy', 
          width: 'uk-width-1-3@m', 
          desc: 'Laboratory Requests/Results',
          component: 'PharmacyIndex'
        },
        {id: 6, 
          link: '/radiographyMicroservice', 
          icon: 'medkit', 
          title: 'Radiography', 
          width: 'uk-width-1-3@m', 
          desc: 'Drug Prescriptions for Patients',
          component: 'RadiographyIndex'
        },
        {id: 7, 
          link: '/walletMicroservice', 
          icon: 'dollar', 
          title: 'Billing/Wallet', 
          width: 'uk-width-1-3@m', 
          desc: 'Patients Radiological Documents',
          component: 'WalletIndex'
        },
        {id: 8, 
          link: '/dashboard/storeMicroservice', 
          icon: 'cart', 
          title: 'Store', 
          width: 'uk-width-1-3@m', 
          desc: 'Patients Procedures',
          component: 'StoreIndex'
        },
        {id: 9, 
          link: '/hrMicroservice', 
          icon: 'users', 
          title: 'Human Resource', 
          width: 'uk-width-1-3@m', 
          desc: 'Manage Patients admissions/discharge',
          component: 'HRIndex'
        }
      ]
    }
  }
  
 displayCards = () => {
   return(
    <section className="uk-section uk-grid-small container uk-padding uk-padding-remove-horizontal uk-section-default" data-uk-grid  data-uk-height-match="target: > a > .uk-card; row: false">
    {this.state.cards.map((card, index) => {
      return (
        <InfoCard key={index} card={card}/>
        )
     })}
    </section>
   )
 }

  render() {
    console.log('inside DASHBOARD', `${this.props.match.url}`)
    return (
      <header>
        <Navbar />
        {this.displayCards()}
        <Switch>
          <Route exact path='/dashboard/hospitalMicroservice' component={HospitalIndex}/>
          <Route exact path={`${this.props.match.path}/hrMicroservice`} component={HRIndex}/>
          <Route exact path='/dasboard/doctorsMicroservice' component={DoctorIndex}/>
          <Route exact path='/dashboard/labsMicroservice' component={LabIndex}/> 
          <Route exact path='/dashboard/patient' component={PatientsIndex}/>
          <Route exact path='/dasboard/pharmacyMicroservice' component={PharmacyIndex}/>
          <Route exact path='/radiographyMicroservice' component={RadiographyIndex}/>
          <Route exact path='/walletMicroservice' component={WalletIndex}/>          
          <Route exact path='/dashboard/storeMicroservice' component={ StoreIndex }/> 
        </Switch>
      </header>
    );
  }
}

export default DashBoard;
