import * as constants from '../../contants';


const initialState = [
    {
        name:"radiography"
    }
]

export default function (state =  initialState, action){
    switch(action.type){
        case constants.GET_RADIOGRAPHY:
            return {
                ...state
            }
        default:
            return state
    }
}