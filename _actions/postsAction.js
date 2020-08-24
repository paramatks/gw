import fetchServer from '../lib/general/fetchServer'
import { GET_POPULAR, GET_NEWDEMAND, SET_LIKE_INCREMENT, SET_COMMENT_LIKE_INCREMENT, GET_INCREMENT5, GET_INCREMENT6, SET_LOGIN_STATE, SET_SHARE_INCREMENT, GET_INCREMENT2 } from '../_constants/action_types';
//import appAuthReducer from '../_reducers/appAuthReducer';
//import comments from '../pages/comments';
//import posts from '../components/posts';
import router from 'next/router'
//import comments from '../pages/comments';




const comment =
{
	commentid: '',
	author: '',
	comment_author_id: '',
	rating: '',
	content: '',
	date: '',
	like: '',
}





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

export function setLikeIncrement(postID) {
	return (dispatch, getState) => {
		//var posts=JSON.parse(JSON.stringify(getState().appAuthReducer.posts));
		//var posts = [...getState().appAuthReducer.posts];
		var posts = getState().appAuthReducer.posts;

		/*
		for(var i=0; i<posts.length; i++) {
			if(posts[i].postID == postID) {
				posts[i].like++;
			} 
		}
		*/

		var newPosts = posts.map((post) => {
			//post.postID === postID ?  {...post, like: post.like++} :  post

			if (post.postID === postID) {
				return { ...post, like: ++post.like }
			}

			return post
		});


		dispatch({
			type: SET_LIKE_INCREMENT,
			afterSetLikeIncrement: newPosts
		})


		//console.log("hiii",newPosts);
	}
}

export function getIncrement2(aaa) {
	//console.log("hii")
	return (dispatch, getState) => {
		//var posts=JSON.parse(JSON.stringify(getState().appAuthReducer.posts));
		//var posts = [...getState().appAuthReducer.posts];
		var posts = getState().appAuthReducer.posts;
		console.log("ok", aaa)

		/*for(var i=0; i<posts.length; i++) {
			if(posts[i].postID == postID) {
				posts[i].like++;
			} 
		}*/


		var newPosts = posts.filter((post) => {
			//post.postID === postID ?  {...post, like: post.like++} :  post

			if (post.postID === aaa) {
				//post.comments.reverse() 
				return post
			}
			//console.log("post",post)
			/*{
				return post[0]
			}*/

		});
		console.log("hi", newPosts)

		dispatch({
			type: GET_INCREMENT2,
			afterIncrement2: newPosts
		})
	}
}

export function setShareIncrement(postID) {
	return (dispatch, getState) => {
		//var posts=JSON.parse(JSON.stringify(getState().appAuthReducer.posts));
		//var posts = [...getState().appAuthReducer.posts];
		var posts = getState().appAuthReducer.posts;

		/*
		for(var i=0; i<posts.length; i++) {
			if(posts[i].postID == postID) {
				posts[i].like++;
			} 
		}
		*/

		var newPosts = posts.map((post) => {
			//post.postID === postID ?  {...post, like: post.like++} :  post

			if (post.postID === postID) {
				return { ...post, shares: ++post.shares }
			}

			return post
		});


		dispatch({
			type: SET_SHARE_INCREMENT,
			afterSetShareIncrement: newPosts
		})


		console.log(newPosts);
	}
}

export function setCommentLikeIncrement(postID) {
	return (dispatch, getState) => {
		//var posts=JSON.parse(JSON.stringify(getState().appAuthReducer.posts));
		//var posts = [...getState().appAuthReducer.posts];
		var posts = getState().appAuthReducer.post;

		/*
		for(var i=0; i<posts.length; i++) {
			if(posts[i].postID == postID) {
				posts[i].like++;
			} 
		}
		*/

		var newPosts = posts.filter((post) => {
			//post.postID === postID ?  {...post, like: post.like++} :  post

			if (post.postID === postID) {
				return { post, like: ++post.like }
			}

			//return post
		});


		dispatch({
			type: SET_COMMENT_LIKE_INCREMENT,
			afterSetCommentLikeIncrement: newPosts
		})


		console.log(newPosts);
	}
}

export function getIncrement5(postID) {
	return (dispatch, getState) => {
		//var posts=JSON.parse(JSON.stringify(getState().appAuthReducer.posts));
		//var posts = [...getState().appAuthReducer.posts];
		var posts = getState().appAuthReducer.post;

		/*
		for(var i=0; i<posts.length; i++) {
			if(posts[i].postID == postID) {
				posts[i].like++;
			} 
		}
		*/

		var newPosts = posts.map((post) => {
			//post.postID === postID ?  {...post, like: post.like++} :  post

			if (post.postID === postID) {
				return { ...post, shares: ++post.shares }
			}

			return post
		});


		dispatch({
			type: GET_INCREMENT5,
			afterIncrement5: newPosts
		})


		console.log(newPosts);
	}
}

export function getIncrement6(commentID) {
	return (dispatch, getState) => {
		//var posts=JSON.parse(JSON.stringify(getState().appAuthReducer.posts));
		//var posts = [...getState().appAuthReducer.posts];
		//var posts = getState().appAuthReducer.post[0].comments;
		var posts = getState().appAuthReducer.post
		/*
		for(var i=0; i<posts.length; i++) {
			if(posts[i].postID == postID) {
				posts[i].like++;
			} 
		}
		*/

		/*var newPosts = posts.map((comments) => {
			//post.postID === postID ?  {...post, like: post.like++} :  post

			if (comments.commentid === commentID) {
				return { ...comments, like: ++comments.like }
			}

			return comments
		});*/

		var newPosts = posts.map((comments) => {

			if (comments.commentid === commentID) {
				return comments, { like: ++comments.like }

			}

			return post

		})

		dispatch({
			type: GET_INCREMENT6,
			afterIncrement6: newPosts
		})


		console.log(newPosts);
	}
}
export function setLoginstate() {
	return (dispatch, getState) => {

		//var login = getState().appAuthReducer.isLoggedIn

		//var newLogin= (login=true) //(login.isLoggedIn=true)


		dispatch({
			type: SET_LOGIN_STATE,
			isLoggedInaction: true
		})
		router.push({
			pathname: '/gwindex',
		});
	}
}


