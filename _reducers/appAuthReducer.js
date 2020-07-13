import {
  GET_STATE, GET_POPULAR, GET_NEWDEMAND, GET_INCREMENT1, GET_INCREMENT2, GET_INCREMENT3
} from '../_constants/action_types'

import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  isConnected: false,
  user: { userID: '001', userName: 'TEST' },
  posts: [],
  newDemand: []

}

export default (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
      }
    case GET_STATE:
      return {
        ...state,
      }
    case GET_POPULAR:
      return {
        ...state,
        posts: action.posts
      }
    case GET_NEWDEMAND:
      return {
        ...state,
        newDemand: action.abc

      }
    case GET_INCREMENT1:
      return {
        ...state,
        posts: action.afterIncrement
      }
    case GET_INCREMENT2:
      return {
        ...state,
        posts: action.afterIncrement2
      }
    case GET_INCREMENT3:
      return {
        ...state,
        posts: action.afterIncrement3

      }
    default:
      return { ...state };
  }
};