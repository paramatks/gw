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
	<div onClick={() => { setCommentLikeIncrement(postID) }} style={{ position: "relative", top: "auto", left: "12rem" }}>
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const PostDetails = ({ icon, Text, postID, setDetailIncrement }) => (
	<div onClick={() => { setDetailIncrement(postID) }} style={{ position:"relative", top:"auto", left:"1.15rem"}} >
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const PostShares = ({ icon, Text, postID, getIncrement5 }) => (
	<div onClick={() => { getIncrement5(postID) }} style={{ position: "relative", top: "auto", left: "-2rem" }}>
		<Space size="small" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);


const CommentLikeActions = ({ icon, Text, commentID, getIncrement6 }) => (
	<div onClick={() => { getIncrement6(commentID) }}  style={{ position: "relative", top: "4rem", left: "17.75rem" }} >
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const CommentShareActions = ({ icon, Text, commentID, getIncrement5 }) => (
	<div onClick={() => { getIncrement5(commentID) }} style={{ backgroundColor: "transparent", position: "absolute", top: "5.95rem", left: "11rem" }} >
		<Space size="small">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const CommentMessageActions = ({ icon, Text, commentID, getIncrement7 }) => (
	<div onClick={() => { getIncrement7(commentID) }} style={{ backgroundColor: "transparent", position: "absolute", top: "5.95rem", left: "15rem" }}>
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
			}}
				className="site-page-header"
				onBack={() => window.history.back()}

				title="Post Details"
			/>




			<List style={{ position: "relative", left: 'auto', top: 'auto' }} style={{ backgroundColor: "white" }}
				itemLayout="vertical"
				size="large"
				bordered="true"
				itemLayout="vertical"


				dataSource={props.appAuthReducer.post}

				renderItem={item => {

					return (

						<List.Item
							key={item.author}
							style={{ boxSizing: "border-box", backgroundColor: '#d3d3d3', height: "17.30rem" }}
						>
							<Row style={{ align: "middle", backgroundColor: "grey", width: "115%", position: "relative", top: "-1rem", left: "-1.50rem", borderBottom: "black solid", borderTop: "black solid", borderWidth: "thin" }} align="middle">
								<Col span={2} push={1}>
									<List.Item.Meta style={{ height: "auto", padding: '0%', position: "relative", top: "0.25rem" }}
										avatar={<Avatar src={item.avatar} />}
									//description={item.description}
									/>
								</Col>
								<Col span={10} push={2}>
									<Text style={{ fontSize: 13, position: "relative", top: "0.35rem" }} >
										{item.author}
									</Text>
									<br />
									<Rate style={{ fontSize: 10, height: "2rem" }} value={item.rating} />
									{/*<Row  >
										<Col    >
											<List.Item.Meta
												title={item.author}
											/>
											
										</Col>
									</Row>
									<Row >
										<Col >
											<Rate style={{fontSize:15}}   value={item.rating} />
										</Col>
									</Row>*/}
								</Col>
								{/*<Col pull={1} span={1}>
									<Button type="text" size="small" >
										<Text > + Friend</Text>
									</Button>
								</Col>*/}
								{/*	<Col push={3} span={1}>
									<Button type="text" size="small"  >
										<Text > + Follow</Text>
									</Button>
								</Col>*/}
								<Col push={9} span={1} >
									<Button type="link" icon={<MoreOutlined style={{ color: 'black' }} />} />
								</Col>
							</Row>
							<Row style={{ position: "relative", left: "auto", top: "-1rem", margin: "auto auto auto auto", backgroundColor: "transparent" }} >
								<Col>
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
								style={{ position: "relative", backgroundColor: "transparent", left: 'auto', top: '-1rem', }}
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
							<List style={{ position: "relative", left: '0rem', top: '-2rem', backgroundColor: "transparent" }} >
								<EnvironmentFilled />
								<Text style={{ position: "relative", left: '10px', top: '0px' }}>
									{item.location}
								</Text>
							</List>

							<List style={{ position: "relative", left: '16.5rem', top: '-3.40rem' }} >
								<Text>
									{item.date}
								</Text>
							</List>
							<>
								<Row style={{ height: "auto", position: "relative", top: "-3.25rem", left: "-1.50rem", width: '115%', backgroundColor: "gray", borderBottom: "black solid", borderTop: "black solid", borderWidth: "thin", }} >
									<Col span="8" style={{ padding: "0.5em" }}>
										<PostDetails icon={MessageOutlined} Text={item.details} key="list-vertical-star-o" postID={item.postID} setDetailIncrement={props.setDetailIncrement} />
									</Col>
									{/*<Col span="8" style={{ padding: "0.5em" }} push="0" >
									<IconText2 icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" postID={item.postID} getIncrement2={props.getIncrement2} />
								</Col>*/}
									<Col span="8" style={{ padding: "0.5em" }}>
										<PostLikes icon={HeartFilled} Text={item.like} key="list-vertical-message" postID={item.postID} setLikeIncrement={props.setLikeIncrement} />
									</Col>
									<Col span="8" style={{ padding: "0.5em" }}>
										<PostShares icon={ShareAltOutlined} Text={item.shares} postID={item.postID} setShareIncrement={props.setShareIncrement} />
									</Col>
								</Row>
							</>
						</List.Item>




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
						<Comment style={{ boxSizing: "border-box", backgroundColor: "#D3D3D3", padding: "3%", borderTop: "solid white", height: "10rem", borderWidth: "medium", }}
							key={item.commentid}
							//actions={item.actions}
							author={<span style={{ fontSize: 13, color: "black", position: "relative", top: "0rem" }}>{item.author}</span>}
							avatar={item.avatar}
							content={<span style={{ fontSize: 13, color: "black", position: "absolute", top: "3rem", left: "0rem" }}>{item.content}</span>}
							datetime={<span style={{ fontSize: 13, color: "black", position: "absolute", top: "6rem", left: "-2rem" }}>{item.date}</span>}
							actions={[
								<CommentLikeActions icon={HeartFilled} Text={item.like} commentID={item.commentid} getIncrement6={props.getIncrement6} key="list-vertical-message" />,
								<CommentShareActions icon={ShareAltOutlined} Text={item.share} commentID={item.commentid} getIncrement5={props.getIncrement5} />,
								<CommentMessageActions icon={MessageOutlined} Text={item.comments.length} commentID={item.commentid} getIncrement7={props.getIncrement7} />,
								<Rate style={{ position: "absolute", top: "1rem", left: "2px", fontSize: "0.70rem" }} value={item.rating} />
							]}
						/>
					)
				}}

			/>
		</>
	)

}

export default connect(state => state, { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 })(Comments);
