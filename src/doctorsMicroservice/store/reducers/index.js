import * as constants from '../../constants';

const initialState = [
    {
        name : "doctors",
        people:[]
    }
]

export default function(state = initialState, action){
    switch(action.type){
        case constants.DISPLAY_NAME:
            //let newState = Object.assign({}, state, action.payload.name);
            return {...state}
        default: 
            return state;
    }
}

