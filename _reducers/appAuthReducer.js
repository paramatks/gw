import { 
    GET_STATE
} from '../_constants/action_types'

import {HYDRATE} from 'next-redux-wrapper';

export const initialState = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    isConnected: false,
    user: {userID: '001', userName: 'TEST'},
    posts: [
        {
          title: 'Ant Design Title 1',
          content: "test1"
        },
        {
          title: 'Ant Design Title 2',
          content: "test2"
        },
        {
          title: 'Ant Design Title 3',
          content: "test3"
        },
        {
          title: 'Ant Design Title 4',
          content: "test4"
        },
      ]
}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
            }   
        case GET_STATE:
            return {
                ...state,
            }     
        default:
            return state;
    }
  };