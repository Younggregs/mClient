import * as constants from '../../constants';

export function getName(){
   // alert('from actions');

    return{
        type: constants.DISPLAY_NAME,
        payload:" doctors"
    }
}