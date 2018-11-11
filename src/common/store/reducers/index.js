import { IO_CLOSE, IO_OPEN } from '../../constants';
const initialState = {
    isWorking: false,
}
export default ( state = initialState, action ) => {
    switch( action.type ){
        case IO_OPEN:
            console.log("IO_OPEN_REDUCER");
            return {...state, isWorking: true }
        case IO_CLOSE:
            console.log("IO_CLOSE_REDUCER");
            return {...state, isWorking: false }
        default:
            return state
    }
}