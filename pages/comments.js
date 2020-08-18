import React, { useEffect } from 'react';
import { Avatar, List, Comment, PageHeader, Row, Col, Card, Rate, Space, Typography } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 } from '../_actions/postsAction';
import { ShareAltOutlined, HeartFilled, MessageFilled, EnvironmentFilled } from '@ant-design/icons';
import { Formik } from 'formik'
import { Form, SubmitButton, ResetButton, Input } from 'formik-antd'
import * as Yup from 'yup';
import ReactDOM from 'react-dom';

const { Text, Title } = Typography;

//const { Meta } = Card;
//const listData = [];




/*const IconText2 = ({ icon, Text, postID, getIncrement2 }) => (
	<div onClick={() => { getIncrement2(postID); }} style={{ position: "relative", left: "50px", top: "-45px" }} >
		<Space size="middle" style={{ backgroundColor: "red" }} >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);*/

const IconText3 = ({ icon, Text, postID, setCommentLikeIncrement }) => (
	<div onClick={() => { setCommentLikeIncrement(postID) }} style={{ position: "relative", left: "0px", top: "0px" }}  >
		<Space style={{ backgroundColor: "purple" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText1 = ({ icon, Text, postID, getIncrement5 }) => (
	<div onClick={() => { getIncrement5(postID) }} style={{ position: "relative", left: "0px", top: "0px" }} >
		<Space style={{ backgroundColor: "yellow" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText4 = ({ icon, Text, commentID, getIncrement6 }) => (
	<div onClick={() => { getIncrement6(commentID) }} style={{ position: "relative", left: "0px", top: "0px" }} >
		<Space size="middle" style={{ backgroundColor: "orange" }} >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

/*const IconText5 = ({ icon, Text, commentID, getIncrement5}) => (
	<div onclick={() => { getIncrement5(commentID)}} style={{backgroundColor:"red"}} >
		<Space size="middle">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
)*/




const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

//const Comments = ({ children }) => (

function Comments(props) {

	useEffect(() => {
		//props.getIncrement(999)

	}, []);


	//console.log(props);
	return (

		<>
			<Head>
				<title>We Work</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>


			<PageHeader style={{ backgroundColor: "gray" }}
				className="site-page-header"
				onBack={() => window.history.back()}

				title="Post Details"
			/>


			<List
				itemLayout="vertical"
				size="large"
				style={{backgroundColor: "grey"}}

				dataSource={props.appAuthReducer.post}

				renderItem={item => {

					return (

						<List.Item style={{ position: "relative", top: "0px", left: "0px" }}
							key={item.author}
							actions={[
								<IconText1 icon={ShareAltOutlined} Text={item.shares} postID={item.postID} getIncrement5={props.getIncrement5} key="list-vertical-star-o" />,
								/*<IconText2 icon={MessageFilled} Text={item.comments} postID={item.postID} getIncrement2={props.getIncrement2} key="list-vertical-like-o" />,*/
								<IconText3 icon={HeartFilled} Text={item.like} postID={item.postID} setCommentLikeIncrement={props.setCommentLikeIncrement} key="list-vertical-message" />,
							]}
						>



							<div
								style={
									//if type == common then we render 999, else then we render orange
									(item.type == "common") ? { backgroundColor: 'purple' } : { backgroundColor: 'orange' }

								}
							>

								<Rate style={{ position: "relative", left: '50px', top: '25px' }} value={item.rating} />

								<List.Item.Meta style={{ position: "relative", left: "5px", top: "-25px" }}
									avatar={<Avatar src={item.avatar} />}
									title={item.author}
								//description={item.description}
								/>
								<Text style={{ position: "relative", left: "50px", top: "-25px" }}>
									{item.content}
								</Text>
								<List
									grid={{
										column: 4,
										gutter: 160

									}}
									style={{ position: "relative", left: '-23px', top: '0px' }}
									dataSource={item.images}
									renderItem={imageItem => (
										<List.Item>
											<img
												src={imageItem.uri}
												width={100}
												style={{ position: "relative", left: '0px', top: '0px', height: '150px', width: '150px', objectFit: 'cover' }}
												//style={{}}
												alt="logo"
											/>
										</List.Item>
									)}
								/>
								<List style={{ position: "relative", left: '20px', top: '-7px' }} >
									<EnvironmentFilled />
									<Text style={{ position: "relative", left: '5px', top: '0px' }}>
										{item.location}
									</Text>
								</List>




								<Text style={{ position: "relative", left: '180px', top: '-30px' }}>
									{item.date}


								</Text>

								{/*<Comment
	  					actions={[<span key="comment-nested-reply-to">Reply to</span>]}
	 					author={item.comments[0].author}
	  					avatar={
							<Avatar
		  				src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		  				alt="Han Solo"
							/>
	 						 }
	 					content={
						item.comments[0].content
						
						}
						>
	
					</Comment>*/}


								{/*

					<Comment
						//dataSource={props.appAuthReducer.posts}


						actions={[<span key="comment-nested-reply-to">Reply to</span>]}
						author={<a>Han Solo</a>}
						avatar={
							<Avatar
								src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
								alt="Han Solo"
							/>
						}
						>
						content={"Hi"}    //{item.comments}
						
						
					</Comment>

						<Formik

							initialValues={{
								comment: "",

							}}

							validationSchema={Yup.object({
								comment: Yup.string()
									.required("Required"),

							})}

							onSubmit={async (values, { setSubmitting }) => {
								await new Promise(r => setTimeout(r, 500));
								setSubmitting(false);
							}}
						/>

							<Form>


								<Form.Item
									name="comment"
								>
									<Input
										name="comment"
										type="text"
										placeholder="comment"
									/>
								</Form.Item>
							</Form>
						*/}
							</div>

						</List.Item>






					)
				}}





			/>


			<Formik initialValues={{
				comment: ""
			}}
				validationSchema={Yup.object({
					comment: Yup.string()
						.required("Required"),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					await new Promise(r => setTimeout(r, 500));
					setSubmitting(false);
				}}>
				<Form>
					<Form.Item
						name="comment"  >
						<Input
							name="comment"
							type="text"
							placeholder="Write new comment"
						/>
					</Form.Item>
					<SubmitButton>Submit</SubmitButton>
					<ResetButton />
				</Form>
			</Formik>








			<List
				dataSource={props.appAuthReducer.post[0].comments}
				renderItem={item => {
					return (
						<Comment
							key={item.commentid}
							//actions={item.actions}
							author={item.author}
							avatar={item.avatar}
							content={item.content}
							datetime={item.date}
							rating={item.rating}
							actions={[
								<IconText4 icon={HeartFilled} Text={item.like} commentID={item.commentid} getIncrement6={props.getIncrement6} key="list-vertical-message" />,
								//<IconText5 icon={MessageFilled} Text={item.comments.length} commentID={item.commentid} getIncrement5={props.getIncrement5}/>,
								<Rate style={{ position: "absolute", top: "-10px", left: "120px" }} value={item.rating} />
							]}
						/>
					)
				}}

			/>
		</>
	)

}

export default connect(state => state, { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 })(Comments);
