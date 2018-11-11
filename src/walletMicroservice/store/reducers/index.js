import * as constants from '../../constants';

const initialState = [
    {
        name: "wallet"
    }
]

export default function( state = initialState, action ){
    switch(action.type){
        case constants.GET_WALLET:
            return {
                ...state, name: action.payload
            }
        default: 
            return state
    }
}