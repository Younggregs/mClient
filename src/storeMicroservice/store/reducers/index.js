import * as constants from '../../constants';

const initialState = [
    {
        name: " Store"
    }
]

export default function( state = initialState, action){
    switch(action.type) {
        case constants.GET_STORE:
            return{
                ...state, name: action.payload.name
            }
        default:
            return state
    }
}