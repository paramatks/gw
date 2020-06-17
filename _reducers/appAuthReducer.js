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
        href: 'https://ant.design',
        type: 1,  // regular post
        title: 'aaa1',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 5,
        images:[],
        content: 'abcdefg'
        },
        {
          href: 'https://ant.design',
          type: 1,
          //title: this.props.appAuthReducer.posts.title,
          title: 'aaa2',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 4,
          //content: this.props.appAuthReducer.posts.content
          content: 'hijklmn'
          },
          {
            href: 'https://ant.design',
            type: 2, //customer post
            //title: this.props.appAuthReducer.posts.title,
            title: 'aaa3',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: 3,
            //content: this.props.appAuthReducer.posts.content
            content: 'opqrst'
            },
            {
              href: 'https://ant.design',
              type: 1, 
              //title: this.props.appAuthReducer.posts.title,
              title: 'aaa4',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description: 2,
              //content: this.props.appAuthReducer.posts.content
              content: 'uvwxyz'
              }
      ],
      newDemand: [
        {
          href: 'https://ant.design',
          title: 'bbb1',
          type: 1, 
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 5,
          content: 'abcdefg'
          },
          {
            href: 'https://ant.design',
            //title: this.props.appAuthReducer.posts.title,
            title: 'bbb2',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description: 4,
            //content: this.props.appAuthReducer.posts.content
            content: 'hijklmn',
            type: 1, 
            },
            {
              href: 'https://ant.design',
              //title: this.props.appAuthReducer.posts.title,
              title: 'bbb3',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description: 3,
              //content: this.props.appAuthReducer.posts.content
              content: 'opqrst',
              type: 1, 
              },
              {
                href: 'https://ant.design',
                //title: this.props.appAuthReducer.posts.title,
                title: 'bbb4',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 2,
                //content: this.props.appAuthReducer.posts.content
                content: 'uvwxyz',
                type: 1, 
                }
        ],
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