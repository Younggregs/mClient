import * as constants from '../../constants';

const initialtState = {
    name: "laboratory"
};


export  default function( state = initialtState, action){
    switch(action.type){
        case constants.GET_LAB_NAME:
            return { ...state }
        default:
            return state
    }
}