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
  posts: [
    {
      postID: '001',
      author: 'Boom',
      rating: 4,
      type: 1,
      content: 'This is a test common post.',
      location: 'Bangkok',
      date: '2020-07-17',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      images: [
        {
          uri: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        },
        {
          uri: 'https://www.bing.com/th?id=OHR.BullPoint_ROW9366584415_1920x1200.jpg&rf=LaDigue_1920x1200.jpg'
        }
      ],
      like: 1000,
      shares: 1500,
      comments: 100
    },

  ],
  newDemand: [
      {
        postID: '001',
        author: 'Max',
        rating: 3,
        Type: 1,
        content: 'This is a test mission post',
        location: 'Samut Prakan',
        date: '2020-07-15',
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HWtAYqtC4Eve3pyYEvDragHaF7%26pid%3DApi&f=1',
        images: [
          {
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FXqHbFmfKChI%2Fmaxresdefault.jpg&f=1&nofb=1'
          },
          {
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eedesignit.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fair-conditioners.jpg&f=1&nofb=1'
          }
        ],
        like: 5000,
        shares: 100,
        comments: 200





      }



  ]

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