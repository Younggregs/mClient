import * as constants from '../../constants';

const initialState = [
    {
        name:"patient"
    }
];

export default function patientsReducer(state = initialState, action){
    switch(action.type){
        case constants.GET_PATIENT:
            return {
                ...state
            }
        default:
            return state;
    }
}