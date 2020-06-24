import fetchServer from '../lib/general/fetchServer'
import { GET_POPULAR, GET_NEWDEMAND } from '../_constants/action_types';


export function getPopularPosts() {
    return function (dispatch, getState) {
        // 1. we are going to get the data from the server
        fetchServer(
            '',                 //Token
            '/gw/getPopular',   //Endpoint
            'POST',             //Method
            {}                  //Params
        )
            .then((json) => {
                // 2. we put the data from the server into the redux
                //console.log(json);
                dispatch({
                    type: GET_POPULAR,
                    posts: json
                })
            })
            .catch((error) => {
                console.log(error);
            })

    }
}


export function getNewDemand() {
    return function (dispatch, getState) {
        // 1. we are going to get the data from the server
        fetchServer(
            '',                 //Token
            '/gw/getNewDemand',   //Endpoint
            'POST',             //Method
            {}                  //Params
        )
            .then((json) => {
                // 2. we put the data from the server into the redux
                //console.log(json);
                dispatch({
                    type: GET_NEWDEMAND,
                    abc: json
                })
            })
            .catch((error) => {
                console.log(error);
            })

    }
}