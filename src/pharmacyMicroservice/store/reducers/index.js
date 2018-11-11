import * as constants from '../../constants';


const initialState = [
    { name: "Pharmacy"}
];

export default function( state = initialState, action){
    switch(action.type){
        case constants.GET_PHARMACY:
            return {
                ...state
            }
        default:
            return state
    }
}