
import { combineReducers } from 'redux';
import {routerReducer} from "react-router-redux";
import hrReducers from './hrMicroservice/store/reducers'
import  labReducers from './labsMicroservice/store/reducers';
import  doctorReducers from './doctorsMicroservice/store/reducers';
import  hospitalReducers from './hospitalMicroservice/store/reducers';
import  patientReducers from './patientsMicroservice/store/reducers';
import  pharmacyReducers from './pharmacyMicroservice/store/reducers';
import  radiographyReducers from './radiographyMicroservice/store/reducers';
import  storeReducers from './storeMicroservice/store/reducers';
import  walletReducers from './walletMicroservice/store/reducers';
import auth from './auth/store/reducers';
import common from './common/store/reducers';

 
export default combineReducers({
    routing: routerReducer,
    labReducers,
    doctorReducers,
    hospitalReducers,
    patientReducers,
    pharmacyReducers,
    radiographyReducers,
    storeReducers,
    walletReducers,
    hrReducers,
    auth,
    common,
});
