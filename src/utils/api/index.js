import axios from 'axios';
//import * as endpoints from '../urls';

//TODO
/*
*function for api calls for 
    get
    Post
using axios()
*/


//NOTE: function will recieve URL, Method, Data

export const get = (endpoint) => {
   const  api =  endpoint
 try {
    axios.get(api)
    .then(response => {
        console.log(response)
    })  
 }catch (error){
     console.log('ERROR FROM GET_API', error);
 }
}


export const post = async (endpoint, data) => {
    const api = endpoint
    try{
        const resp =  await axios.post(api, data)
        return resp.data
    }catch(error){
        throw error;
    }
}