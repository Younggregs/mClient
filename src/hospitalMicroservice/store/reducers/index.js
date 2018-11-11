
//hospital Microservice reducer
import * as constants from '../../constants';

const initialState = [
    {
     name : "hospital microservice"
    }
]


export default function( state = initialState, action){
    
    switch(action.type){
        
        case constants.GET_HOSPITAL:
            return {
                ...state
            };

        default:
            return state;
    }
}