import * as constants from '../../constants';

export function getStore(){
    return {
        type: constants.GET_STORE,
        payload:[
            {
                name: ""
            }
        ]
    }
}