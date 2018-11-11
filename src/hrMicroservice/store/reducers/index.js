import * as constants from '../../constants';

const initialState = [
    {
        name: "HR"
    }
]

export default function( state = initialState, action){
    switch (action.type){
        case constants.GET_HR:
            return {
                ...state, name:action.payload
            }
        default:
            return state
    }
}