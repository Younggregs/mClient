
import {
    LOGIN_FAILED, 
    LOGIN_SUCCESS, 
    GET_USERS,
    AUTO_LOGIN_ATTEMPT, 
    AUTO_LOGIN_ATTEMPT_FAILED
} from '../../constants';
import { post, get } from '../../../utils/api';
import { 
    GET_USER_ENDPOINT,
     LOGIN_USER_ENDPOINT 
    } from '../../../utils/urls';
import { isWorking, isDoneWorking } from '../../../common/store/actions';


const autoLoginAttepmtFail = () => {
    return {
        type: AUTO_LOGIN_ATTEMPT_FAILED
    }
}
const saveStateLocally = (user) => {
    try { 
       const credentials = JSON.stringify(user);
        localStorage.setItem('userCredentials', credentials);
    }catch (error){
        console.log(error);

    }
}

export const getStateLocally = (dispatch) => {
    try{
        const userString = localStorage.getItem('userCredentials');
        if (userString === null) {
            dispatch(autoLoginAttepmtFail)
//          return undefined;
        }
        const userObject = JSON.parse(userString);
        return userObject
    }catch (error){
       // dispatch(autoLoginAttepmtFail)
        return undefined
    }
}

export const login =  (data) => {
    return async (dispatch) => {
    try{
       dispatch(isWorking);
       // console.log({data})
        let payload = await post(LOGIN_USER_ENDPOINT, data);
       // console.log('LOGIN_ACTION', {payload});
        dispatch({
          type: LOGIN_SUCCESS,
            payload
        })
       saveStateLocally(payload)
       dispatch(isDoneWorking);
    }
    catch(error){
        console.log("LOGIN_ACTION",{error})
        dispatch({
            type: LOGIN_FAILED,
            error
        });
        
        dispatch(isDoneWorking);
    }
}
}

export const  getUser = () => {
    get(GET_USER_ENDPOINT);
    return{
        type:GET_USERS
    }
}

export const attemptAutoLogin = () => {
    const savedToken = getStateLocally()
    if(savedToken === null){
       return undefined
    }
    return   {
        type: AUTO_LOGIN_ATTEMPT,
        savedToken
    } // JSON.parse(savedToken)
}

