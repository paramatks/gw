import React, { useEffect } from 'react';
import { Avatar, List, Comment, PageHeader, Row, Col, Card, Rating, Space } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { getPopularPosts, getNewDemand, getIncrement1, getIncrement2, getIncrement3, getIncrement4 } from '../_actions/postsAction';
import { ShareAltOutlined, HeartFilled, MessageFilled, } from '@ant-design/icons';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Form, Input, } from 'formik-antd';
import ReactDOM from 'react-dom';


//const { Meta } = Card;
//const listData = [];




const IconText2 = ({ icon, Text, postID, getIncrement2 }) => (
	<div /*onClick={() => { getIncrement2(postID); }}*/  >
		<Space size="middle" style={{ backgroundColor: "orange" }} >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText3 = ({ icon, Text, postID, getIncrement1 }) => (
	<div onClick={() => { getIncrement1(postID) }}  >
		<Space style={{ backgroundColor: "orange" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText1 = ({ icon, Text, postID, getIncrement3 }) => (
	<div onClick={() => { getIncrement3(postID) }} style={{ position: "relative", left: "50", top: "0" }} >
		<Space style={{ backgroundColor: "orange" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText4 = ({ icon, Text, commentID, getIncrement4 }) => (
	<div onClick={() => { getIncrement4(commentID) }} style={{ backgroundColor: "orange" }} >
		<Space  size="middle">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);




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
			<PageHeader style={{ backgroundColor: "gray" }}
				className="site-page-header"
				onBack={() => window.history.back()}

				title="Post Details"
			/>

			<List
				itemLayout="vertical"
				size="large"

				dataSource={props.appAuthReducer.post}

				renderItem={item => {

					return (

						<List.Item
							key={item.author}
							actions={[
								<IconText1 icon={ShareAltOutlined} Text={item.shares} postID={item.postID} getIncrement3={props.getIncrement3} key="list-vertical-star-o" />,
								<IconText2 icon={MessageFilled} Text={item.comments.length} postID={item.postID} getIncrement2={props.getIncrement2} key="list-vertical-like-o" />,
								<IconText3 icon={HeartFilled} Text={item.like} postID={item.postID} getIncrement1={props.getIncrement1} key="list-vertical-message" />,
							]}
						>

							<List.Item.Meta
								avatar={<Avatar src={item.avatar} />}
								title={item.author}
							//description={item.description}
							/>
							{item.content}
							<List
								grid={{
									column: 4,
									gutter: 100

								}}
								style={{ position: "relative", left: '-10px', top: '20px' }}

								dataSource={item.images}
								renderItem={imageItem => (
									<List.Item>




										<img
											src={imageItem.uri}
											width={100}
											style={{ position: "relative", left: '0px', top: '0px', height: '100px', width: '100px', objectFit: 'cover' }}
											//style={{}}
											alt="logo"
										/>

									</List.Item>
								)}
							/>

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
						</List.Item>
					)
				}}





			/>

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
							actions={[
								<IconText4 icon={HeartFilled} Text={item.like} commentID={item.commentid} getIncrement4={props.getIncrement4} key="list-vertical-message" />,]}


						/>
					)
				}}

			/>
		</>
	)

}

export default connect(state => state, { getPopularPosts, getNewDemand, getIncrement1, getIncrement2, getIncrement3, getIncrement4 })(Comments);
