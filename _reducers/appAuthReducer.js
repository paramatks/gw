import {
	GET_STATE, GET_POPULAR, GET_NEWDEMAND, SET_LIKE_INCREMENT, GET_INCREMENT2, SET_SHARE_INCREMENT, SET_COMMENT_LIKE_INCREMENT, GET_INCREMENT5, GET_INCREMENT6, SET_LOGIN_STATE,
} from '../_constants/action_types'

import { HYDRATE } from 'next-redux-wrapper';
//import * as t from './actionTypes';


export const initialState = {
	isLoggedIn: false,
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
			type: "common",
			content: 'This is a test common post.',
			location: 'Bangkok',
			date: '2020-07-17 7:11',
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
			comments: [
				{
					commentid: 1,
					author: 'Dan',
					comment_author_id: 1,
					rating: 5,
					content: "That look's great",
					date: '2020-07-18 7:11',
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
					like: 2000,
					comments: [
						{
							commentid: 4,
							author: 'Ben',
							comment_author_id: 4,
							rating: 5,
							content: "I agree",
							date: '2020-07-19 7:11',
							avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
							like: 1500
						},
						{
							commentid: 5,
							author: 'Daniel',
							comment_author_id: 5,
							rating: 4,
							content: "I don't agree!",
							date: '2020-07-19 7:11',
							avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
							like: 1000

						}
					]
				},
				{
					commentid: 2,
					author: 'Michael',
					comment_author_id: 2,
					rating: 4,
					content: "That look's bad",
					date: '2020-07-19 7:11',
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
					like: 500,
				},
				{
					commentid: 3,
					author: 'Joseph',
					comment_author_id: 3,
					rating: 4,
					content: "That look's awesome",
					date: '2020-07-20 7:11',
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
					like: 2500,
				},
			]
		},
		{
			postID: '002',
			author: 'Max',
			rating: 3,
			type: "mission",
			content: 'This is a test mission post',
			location: 'Samut Prakan',
			date: '2020-07-15 7:11',
			avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
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
			comments: [
				{
					commentid: 1,
					author: 'Dan',
					comment_author_id: 1,
					rating: 5,
					content: "That look's great",
					date: '2020-07-18 7:11',
					like: 2000,
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
					comments: [
						{
							commentid: 4,
							author: 'Sarah',
							comment_author_id: 4,
							rating: 5,
							content: "Hey!",
							date: '2020-07-19 7:11',
							like: 1500,
							avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						},
						{
							commentid: 5,
							author: 'Michael',
							comment_author_id: 5,
							rating: 4,
							content: "What?!",
							date: '2020-07-19 7:11',
							like: 1000,
							avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						}
					]
				},
				{
					commentid: 2,
					author: 'George',
					comment_author_id: 2,
					rating: 4,
					content: "Wow",
					date: '2020-07-19 7:11',
					like: 500,
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},
				{
					commentid: 3,
					author: 'Andy',
					comment_author_id: 3,
					rating: 4,
					content: "haha",
					date: '2020-07-20 7:11',
					like: 2500,
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				},






			]
		}



	],
	post: {}

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
		case SET_LIKE_INCREMENT:
			return {
				...state,
				posts: action.afterSetLikeIncrement
			}
		case GET_INCREMENT2:
			return {
				...state,
				post: action.afterIncrement2
			}
		case SET_SHARE_INCREMENT:
			return {
				...state,
				posts: action.afterSetShareIncrement

			}
		case SET_COMMENT_LIKE_INCREMENT:
			return {
				...state,
				post: action.afterSetCommentLikeIncrement

			}
		case GET_INCREMENT5:
			return {
				...state,
				post: action.afterIncrement5
			}
		case GET_INCREMENT6:
			return {
				...state,
				post: action.afterIncrement6
			}
		case SET_LOGIN_STATE:
			return {
				...state,
				isAuthenticated: action.isLoggedInaction
			}
		default:
			return { ...state };
	}
};