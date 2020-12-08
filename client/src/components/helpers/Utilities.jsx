/**
* api helper file
*/
import axios from 'axios';

//for api calls
const apiCall = (config, callback, errorCallback) => {

    //do axios call
    axios(config)
    .then((res) =>{
        if(callback != null){
            callback(res);
        }
    //catch any errors
    }).catch((err) => {
        if(errorCallback != null){
            errorCallback(err);
        }
    })

}


export {apiCall};