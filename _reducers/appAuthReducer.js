import {
  GET_STATE
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
      href: 'https://ant.design',
      type: 1,  // regular post
      title: 'Username',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 5,
      images: [{ uri: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png' }, { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orange-Whole-&-Split.jpg/1920px-Orange-Whole-&-Split.jpg' }],
      content: 'Bears like to eat oranges',
      location: 'Position',
      date: '2020/10/10 15:00'
    },
    {
      href: 'https://ant.design',
      type: 1,
      //title: this.props.appAuthReducer.posts.title,
      title: 'Username',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 4,
      images: [{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1024px-Flag_of_Thailand.svg.png' }, { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png' }, { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/State_Flag_of_Thailand_%281916%29.svg/1920px-State_Flag_of_Thailand_%281916%29.svg.png' }],
      //content: this.props.appAuthReducer.posts.content
      content: 'The flags of Thailand, Vietnam and Siam',
      location: 'Position',
      date: '1997/04/24 10:00'
    },
    {
      href: 'https://ant.design',
      type: 2, //customer post
      //title: this.props.appAuthReducer.posts.title,
      title: 'Username',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 3,
      images: [],
      //content: this.props.appAuthReducer.posts.content
      content: 'opqrst',
      location: 'Position',
      date: '2005/04/24 10:00'
    },
    {
      href: 'https://ant.design',
      type: 1,
      //title: this.props.appAuthReducer.posts.title,
      title: 'Username',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 2,
      images: [],
      //content: this.props.appAuthReducer.posts.content
      content: 'uvwxyz',
      location: 'Position',
      date: '2015/04/24 10:00'
    }
  ],
  newDemand: [
    {
      href: 'https://ant.design',
      title: 'bbb1',
      type: 1,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 5,
      images: [],
      content: 'abcdefg',
      location: 'Position',
      date: '2019/04/24 10:00'
    },
    {
      href: 'https://ant.design',
      //title: this.props.appAuthReducer.posts.title,
      title: 'bbb2',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 4,
      images: [],
      //content: this.props.appAuthReducer.posts.content
      content: 'hijklmn',
      type: 1,
      location: 'Position',
      date: '2018/04/24 10:00'
    },
    {
      href: 'https://ant.design',
      //title: this.props.appAuthReducer.posts.title,
      title: 'bbb3',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 3,
      images: [],
      //content: this.props.appAuthReducer.posts.content
      content: 'opqrst',
      type: 1,
      location: 'Position',
      date: '2017/04/24 10:00'
    },
    {
      href: 'https://ant.design',
      //title: this.props.appAuthReducer.posts.title,
      title: 'bbb4',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 2,
      images: [],
      //content: this.props.appAuthReducer.posts.content
      content: 'uvwxyz',
      type: 1,
      location: 'Position',
      date: '2012/04/24 10:00'
    }
  ],
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
    default:
      return state;
  }
};