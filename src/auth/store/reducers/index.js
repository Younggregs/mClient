import { LOGIN_SUCCESS,
     LOGIN_FAILED,
     AUTO_LOGIN_ATTEMPT,
     AUTO_LOGIN_ATTEMPT_FAILED
     } from '../../constants';

const initialState = { 
    isLoggedIn: false,
    token: null,
    user: null,
    error: null,
    savedToken: null
}

export default ( state = initialState, action ) => {
    switch( action.type ){
        case LOGIN_SUCCESS:
            console.log('LOGIN_REDUCER', action.payload.token);   

            return {
                ...state, 
                isLoggedIn: action.payload.token !== null ? true : false, 
                user: action.payload.data,
                token: action.payload.token, 
                error: null
            }
        case LOGIN_FAILED:
            console.log('LOGIN FAILED', action)
            return {
                ...state, 
                isLoggedIn: false, 
                user: null,
                token: null,
                error: action.error
            }
        case AUTO_LOGIN_ATTEMPT:
            return {
                ...state,
                isLoggedIn: true,
                token: action.savedToken,
                error: null
            }
        case AUTO_LOGIN_ATTEMPT_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                error: action.error
            }
        default:
            return state
    }
}