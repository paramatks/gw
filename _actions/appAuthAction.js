import { GET_STATE } from '../_constants/action_types'

import Router from 'next/router'

import { setCookie, getCookie, getCookieFromBrowser, getCookieFromServer, removeCookie } from '../lib/general/cookieOps'

/*
Use to check existing cookie and authenticate with the server again
*/
export const getState = (req) => {
    return function (dispatch) {

        dispatch({
            type: GET_STATE,
        });

    }
}
