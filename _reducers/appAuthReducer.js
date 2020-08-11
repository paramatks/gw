import {
	GET_STATE, GET_POPULAR, GET_NEWDEMAND, GET_INCREMENT1, GET_INCREMENT2, GET_INCREMENT3, GET_INCREMENT4, GET_INCREMENT5, GET_INCREMENT6, SET_LOGIN_STATE
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
			comments: [
				{
					commentid: 1,
					author: 'Dan',
					comment_author_id: 1,
					rating: 5,
					content: "That look's great",
					date: ' 2020-07-18',
					avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F341831200626efe3e0cf83317801fcac2200fbe2%2F68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323639323831302f323130343036312f34643839316563302d386637362d313165332d393230322d6637333934306431306632302e706e67&f=1&nofb=1',
					like: 2000,
					comments: [
						{
							commentid: 4,
							author: 'Ben',
							comment_author_id: 4,
							rating: 5,
							content: "I agree",
							date: '2020-07-19',
							avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F341831200626efe3e0cf83317801fcac2200fbe2%2F68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323639323831302f323130343036312f34643839316563302d386637362d313165332d393230322d6637333934306431306632302e706e67&f=1&nofb=1',
							like: 1500
						},
						{
							commentid: 5,
							author: 'Daniel',
							comment_author_id: 5,
							rating: 4,
							content: "I don't agree!",
							date: '2020-07-19',
							avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F341831200626efe3e0cf83317801fcac2200fbe2%2F68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323639323831302f323130343036312f34643839316563302d386637362d313165332d393230322d6637333934306431306632302e706e67&f=1&nofb=1',
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
					date: ' 2020-07-19',
					avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F341831200626efe3e0cf83317801fcac2200fbe2%2F68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323639323831302f323130343036312f34643839316563302d386637362d313165332d393230322d6637333934306431306632302e706e67&f=1&nofb=1',
					like: 500,
				},
				{
					commentid: 3,
					author: 'Joseph',
					comment_author_id: 3,
					rating: 4,
					content: "That look's awesome",
					date: ' 2020-07-20',
					avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2F341831200626efe3e0cf83317801fcac2200fbe2%2F68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f323639323831302f323130343036312f34643839316563302d386637362d313165332d393230322d6637333934306431306632302e706e67&f=1&nofb=1',
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
			comments: [
				{
					commentid: 1,
					author: 'Dan',
					comment_author_id: 1,
					rating: 5,
					content: "That look's great",
					date: ' 2020-07-18',
					like: 2000,
					comments: [
						{
							commentid: 4,
							author: 'Sarah',
							comment_author_id: 4,
							rating: 5,
							content: "Hey!",
							date: '2020-07-19',
							like: 1500
						},
						{
							commentid: 5,
							author: 'Michael',
							comment_author_id: 5,
							rating: 4,
							content: "What?!",
							date: '2020-07-19',
							like: 1000

						}
					]
				},
				{
					commentid: 2,
					author: 'George',
					comment_author_id: 2,
					rating: 4,
					content: "Wow",
					date: ' 2020-07-19',
					like: 500,
				},
				{
					commentid: 3,
					author: 'Andy',
					comment_author_id: 3,
					rating: 4,
					content: "haha",
					date: ' 2020-07-20',
					like: 2500,
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
		case GET_INCREMENT1:
			return {
				...state,
				posts: action.afterIncrement
			}
		case GET_INCREMENT2:
			return {
				...state,
				post: action.afterIncrement2
			}
		case GET_INCREMENT3:
			return {
				...state,
				posts: action.afterIncrement3

			}
		case GET_INCREMENT4:
			return {
				...state,
				post: action.afterIncrement4

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
				isLoggedIn: action.isLoggedInaction
			}
		default:
			return { ...state };
	}
};