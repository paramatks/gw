import React, { useEffect } from 'react';
import { Avatar, List, Comment, PageHeader, Row, Col, Rate, Space, Typography, Button } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 } from '../_actions/postsAction';
import { ShareAltOutlined, HeartFilled, EnvironmentFilled, MoreOutlined, MessageOutlined } from '@ant-design/icons';
import { Formik } from 'formik'
import { Form, SubmitButton, ResetButton, Input } from 'formik-antd'
import * as Yup from 'yup';
import { StickyContainer, Sticky } from 'react-sticky';

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

const PostLikes = ({ icon, Text, postID, setCommentLikeIncrement }) => (
	<div onClick={() => { setCommentLikeIncrement(postID) }} style={{ position: "relative", top: "auto", left: "auto" }}>
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const PostDetails = ({ icon, Text, postID, setDetailIncrement }) => (
	<div onClick={() => { setDetailIncrement(postID) }} style={{ position: "relative", top: "auto", left: "auto" }} >
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const PostShares = ({ icon, Text, postID, getIncrement5 }) => (
	<div onClick={() => { getIncrement5(postID) }} style={{ position: "relative", top: "auto", left: "auto" }}>
		<Space size="small" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);


const CommentLikeActions = ({ icon, Text, commentID, getIncrement6 }) => (
	<div style={{ marginRight: 15 }} onClick={() => { getIncrement6(commentID) }}  >
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const CommentShareActions = ({ icon, Text, commentID, getIncrement5 }) => (
	<div style={{ marginRight: 15 }} onClick={() => { getIncrement5(commentID) }} >
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const CommentMessageActions = ({ icon, Text, commentID, getIncrement7 }) => (
	<div onClick={() => { getIncrement7(commentID) }}>
		<Space size="small">
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
			<Head>
				<title>We Work</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>


			<PageHeader style={{
				backgroundColor: "#D3D3D3",
				height: "3.5rem"
			}}
				className="site-page-header"
				onBack={() => window.history.back()}

				title="Post Details"
			/>




			<List style={{ backgroundColor: "white" }}
				itemLayout="vertical"
				size="large"
				bordered="true"
				itemLayout="vertical"


				dataSource={props.appAuthReducer.post}

				renderItem={item => {

					return (
						<div
							key={item.author}
							style={{ backgroundColor: '#d3d3d3' }}
						>
							<Row style={{ backgroundColor: "grey", borderBottom: "black solid", borderTop: "black solid", borderWidth: "thin" }} justify="start" align="middle">
								<Col span={2} style={{ marginLeft: 15 }} >
									<Avatar src={item.avatar} />
								</Col>
								<Col span={13} style={{ marginLeft: 5 }}>
									<Space size={0} direction="vertical">
										<Text style={{ fontSize: 12 }} >
											{item.author}
										</Text>
										<Rate style={{ fontSize: 10 }} value={item.rating} />
									</Space>
								</Col>
								<Col style={{ marginLeft: 70 }} span={1} >
									<Button type="link" icon={<MoreOutlined style={{ color: 'black' }} />} />
								</Col>
							</Row>
							<Row style={{ margin: "2% auto auto auto", backgroundColor: "transparent" }} >
								<Col push="2" span="24">
									<Text>
										{item.content}
									</Text>
								</Col>
							</Row>

							<List
								grid={{
									column: 4,
									gutter: 100

								}}
								style={{ backgroundColor: "transparent", }}
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


							<Row style={{ backgroundColor: "transparent", margin: "auto auto 2% auto" }} >
								<Col span="2" push="1">
									<EnvironmentFilled />
								</Col>
								<Col span="7" push="1">
									<Text>
										{item.location}
									</Text>
								</Col>
								<Col span="8" push="7">
									<Text>
										{item.date}
									</Text>
								</Col>
							</Row>

							<>
								<Row style={{ backgroundColor: "gray", borderBottom: "black solid", borderTop: "black solid", borderWidth: "thin", }} >
									<Col span="8" push="1" style={{ padding: "0.5em" }}>
										<PostDetails icon={MessageOutlined} Text={item.details} key="list-vertical-star-o" postID={item.postID} setDetailIncrement={props.setDetailIncrement} />
									</Col>
									{/*<Col span="8" style={{ padding: "0.5em" }} push="0" >
									<IconText2 icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" postID={item.postID} getIncrement2={props.getIncrement2} />
								</Col>*/}
									<Col span="8" push="5" style={{ padding: "0.5em" }}>
										<PostShares icon={ShareAltOutlined} Text={item.shares} key="list-vertical-message" postID={item.postID} setShareIncrement={props.setShareIncrement} />
									</Col>
									<Col span="8" push="3" style={{ padding: "0.5em" }}>
										<PostLikes icon={HeartFilled} Text={item.like} postID={item.postID} setLikeIncrement={props.setLikeIncrement} />
									</Col>
								</Row>
							</>
						</div>




					)
				}}





			/>


			{/*<Formik initialValues={{
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
			</Formik>*/}








			<List
				dataSource={props.appAuthReducer.post[0].comments}
				renderItem={item => {
					return (
						<>
							{/*key={item.commentid}*/}




							<Row style={{ backgroundColor: "#D3D3D3", width: "100%", borderTopWidth: "medium", borderTopStyle: "solid", borderTopColor: "white" }} align="middle">
								<Col span="3" style={{ height: "auto", padding: '2%', position: "relative", top: "auto" }}>
									<List.Item.Meta
										avatar={<Avatar src={item.avatar} />}
									//description={item.description}
									/>
								</Col>
								<Col span="12">
									{item.author}
									<br></br>
									<Rate style={{ fontSize: 10, }} value={item.rating} />

								</Col>
								<Col span="3" push="6">
									<Button type="link" icon={<MoreOutlined style={{ color: 'black' }} />} />
								</Col>
							</Row>

							<Row style={{ backgroundColor: "#D3D3D3", borderTopWidth: "thin", borderTopStyle: "solid", borderTopColor: "black" }} justify="center" >
								<Col span="12" pull="3" style={{ margin: "auto auto 3% auto" }}>
									{item.content}
								</Col>
							</Row>
							<Row style={{ backgroundColor: "#D3D3D3", borderTopWidth: "thin", borderTopStyle: "solid", borderTopColor: "black" }} >
								<Col span="7" push="1">
									<Text>
										{item.date}
									</Text>
								</Col>
								<Col span="5" push="3">
									<CommentLikeActions icon={HeartFilled} Text={item.like} commentID={item.commentid} getIncrement6={props.getIncrement6} key="list-vertical-message" />
								</Col>
								<Col span="5" push="3">
									<CommentShareActions icon={ShareAltOutlined} Text={item.share} commentID={item.commentid} getIncrement5={props.getIncrement5} />
								</Col>
								<Col span="5" push="3">
									<CommentMessageActions icon={MessageOutlined} Text={item.comments.length} commentID={item.commentid} getIncrement7={props.getIncrement7} />
								</Col>
							</Row>
						</>
					)
				}}

			/>
		</>
	)

}

export default connect(state => state, { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 })(Comments);
