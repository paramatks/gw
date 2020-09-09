import React, { useEffect, useState } from 'react';
import { Avatar, List, Comment, PageHeader, Row, Col, Rate, Space, Typography, Button, Modal } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 } from '../_actions/postsAction';
import { ShareAltOutlined, HeartFilled, EnvironmentFilled, MoreOutlined, MessageOutlined } from '@ant-design/icons';
import { Formik } from 'formik'
import { Form, SubmitButton, ResetButton, Input } from 'formik-antd'
import * as Yup from 'yup';
import { StickyContainer, Sticky } from 'react-sticky';
import ReactDOM from 'react-dom';

const { Text, Title } = Typography;
const { TextArea } = Input;

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

	const [visible, setVisible] = useState(false);
	/*const [modalText, setModalText] = useState('New Comment')*/
	const [confirmLoading, setConfirmLoading] = useState(false)

	/*const [state, setstate] = useState({
		ModalText: 'Content of the modal',
		Visible: false,
		ConfirmLoading: false,
	});*/

	const showModal = () => {
		setVisible(true)
	};

	const handleOk = () => {

		setModalText('The modal will be closed after two seconds')
		setConfirmLoading(true)

		setTimeout(() => {
			setVisible(false)
			setConfirmLoading(false)
		}, 2000);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setVisible(false)
	};

	//console.log(props);
	return (
		<>
			<Head>
				<title>GoodWork</title>
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
								<Col span={2} style={{ marginLeft: 15, marginBottom: "0.25rem", marginTop: "0.25rem" }} >
									<Avatar src={item.avatar} />
								</Col>
								<Col span={13} style={{ marginLeft: 5, marginBottom: "0.25rem", marginTop: "0.25rem" }}>
									<Space size={0} direction="vertical">
										<Text style={{ fontSize: 13 }} >
											{item.author}
										</Text>
										<Rate style={{ fontSize: 12 }} value={item.rating} />
									</Space>
								</Col>
								<Col style={{ marginLeft: "4.25rem", marginBottom: "0.25rem", marginTop: "0.25rem" }} span="1" >
									<Button type="link" icon={<MoreOutlined style={{ color: 'black' }} />} />
								</Col>
							</Row>
							<Row style={{ backgroundColor: "transparent" }} >
								<Col span="24" style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
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


							<Row style={{ backgroundColor: "transparent", margin: "auto auto 0.5rem auto" }} >
								<Col span="1" style={{ marginLeft: "0.75rem", marginRight: "0.5rem" }} >
									<EnvironmentFilled />
								</Col>
								<Col span="10">
									<Text>
										{item.location}
									</Text>
								</Col>
								<Col span="10">
									<Row justify="end" style={{ marginRight: "0.25rem" }}>
										<Text>
											{item.date}
										</Text>
									</Row>
								</Col>
							</Row>

							<>
								<Row style={{ backgroundColor: "gray", borderBottom: "black solid", borderTop: "black solid", borderWidth: "thin", }} align="middle" >
									<Col span="6" style={{ marginLeft: "0.5rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
										<PostDetails icon={MessageOutlined} Text={item.details} key="list-vertical-star-o" postID={item.postID} setDetailIncrement={props.setDetailIncrement} />
									</Col>
									{/*<Col span="8" style={{ padding: "0.5em" }} push="0" >
									<IconText2 icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" postID={item.postID} getIncrement2={props.getIncrement2} />
								</Col>*/}
									<Col span="6" style={{ marginLeft: "4rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
										<Row justify="end">
											<PostShares icon={ShareAltOutlined} Text={item.shares} key="list-vertical-message" postID={item.postID} setShareIncrement={props.setShareIncrement} />
										</Row>
									</Col>
									<Col span="6" style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
										<Row justify="end">
											<PostLikes icon={HeartFilled} Text={item.like} postID={item.postID} setLikeIncrement={props.setLikeIncrement} />
										</Row>
									</Col>
								</Row>
								<Row style={{ backgroundColor: "#D3D3D3" }} justify="center">
									<Col span="10">
										<Button style={{ backgroundColor: "#D3D3D3", borderBottomStyle: "none", borderTopStyle: "none", borderRightColor: "black", borderLeftColor: "black", color: "black" }} type="primary" onClick={() => showModal()}>
											Write new comment
        								</Button>
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

							<Row style={{ backgroundColor: "#D3D3D3", borderTopWidth: "medium", borderTopStyle: "solid", borderTopColor: "white" }} align="middle">
								<Col span="3" style={{ height: "auto", marginBottom: "0.75rem", marginLeft: "0.5rem" }}>
									<List.Item.Meta
										avatar={<Avatar src={item.avatar} />}
									/>
								</Col>
								<Col span="17" style={{ marginBottom: "0.5rem" }}>
									<Text style={{ fontSize: 12 }}>
										{item.author}
									</Text>
									<br></br>
									<Rate style={{ fontSize: 11, }} value={item.rating} />
								</Col>
								<Col span="2" style={{ marginBottom: "0.5rem", marginLeft: "0.5rem" }}>
									<Button type="link" icon={<MoreOutlined style={{ color: 'black' }} />} />
								</Col>
							</Row>

							<Row style={{ backgroundColor: "#D3D3D3", borderTopWidth: "thin", borderTopStyle: "solid", borderTopColor: "black" }} justify="start" >
								<Col span="10" style={{ marginLeft: "2.75rem", marginBottom: "0.75rem", marginTop: "0.5rem" }}>
									<Text>
										{item.content}
									</Text>
								</Col>
							</Row>
							<Row style={{ backgroundColor: "#D3D3D3", borderTopWidth: "thin", borderTopStyle: "solid", borderTopColor: "black", borderBottomWidth: "thin", borderBottomStyle: "solid", borderBottomColor: "black" }} justify="end" >
								<Col span="8" style={{ marginTop: "0.5rem", marginBottom: "0.5rem", marginRight: "2.5rem" }}>
									<Text>
										{item.date}
									</Text>
								</Col>
								<Col span="4" style={{ marginTop: "0.5rem", marginBottom: "0.5rem", marginRight: "0.25rem" }}>
									<CommentLikeActions icon={HeartFilled} Text={item.like} commentID={item.commentid} getIncrement6={props.getIncrement6} key="list-vertical-message" />
								</Col>
								<Col span="4" style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
									<CommentShareActions icon={ShareAltOutlined} Text={item.share} commentID={item.commentid} getIncrement5={props.getIncrement5} />
								</Col>
								<Col span="4" style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
									<CommentMessageActions icon={MessageOutlined} Text={item.comments.length} commentID={item.commentid} getIncrement7={props.getIncrement7} />
								</Col>
							</Row>
							<Row style={{ backgroundColor: "#D3D3D3" }} justify="center">
								<Col span="10">
									<Button style={{ backgroundColor: "#D3D3D3", borderBottomStyle: "none", borderTopStyle: "none", borderRightColor: "black", borderLeftColor: "black", color: "black" }} type="primary" onClick={() => showModal()}>
										Write new comment
        							</Button>
								</Col>
							</Row>
							<Modal
								style={{ marginTop: "20rem" }}
								title="New Comment"
								visible={visible}
								onOk={() => handleOk()}
								confirmLoading={() => setConfirmLoading()}
								onCancel={() => handleCancel()}
								footer={null}
							>
								{/*<p>{modalText}</p>*/}
								<Formik initialValues={{
									comment: ""
								}}
									validationSchema={Yup.object({
										comment: Yup.string()
											.required("Required"),
									})}
									onSubmit={async (values, { setSubmitting }) => {
										//await new Promise(r => setTimeout(r, 500));
										//setSubmitting(false);
										console.log(values)
									}}>
									<Form>
										<Form.Item
											name="comment">
											<TextArea
												rows={5}
												size="large"
												name="comment"
												type="text"
												placeholder="Write new comment"
											/>
										</Form.Item>
										<SubmitButton
											style={{ marginLeft: "13.75rem" }}
										>Submit</SubmitButton>
										<ResetButton />
									</Form>
								</Formik>
							</Modal>
						</>
					)
				}}

			/>
		</>
	)
}

export default connect(state => state, { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 })(Comments);
