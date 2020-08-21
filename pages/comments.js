import React, { useEffect } from 'react';
import { Avatar, List, Comment, PageHeader, Row, Col, Rate, Space, Typography, Button } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 } from '../_actions/postsAction';
import { ShareAltOutlined, HeartFilled, EnvironmentFilled, MoreOutlined } from '@ant-design/icons';
import { Formik } from 'formik'
import { Form, SubmitButton, ResetButton, Input } from 'formik-antd'
import * as Yup from 'yup';

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
	<div onClick={() => { setCommentLikeIncrement(postID) }}  >
		<Space size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText1 = ({ icon, Text, postID, getIncrement5 }) => (
	<div onClick={() => { getIncrement5(postID) }}  >
		<Space size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText4 = ({ icon, Text, commentID, getIncrement6 }) => (
	<div onClick={() => { getIncrement6(commentID) }}  style={{position:"relative", top:"1.75rem", left:"0rem"}}>
		<Space size="middle"  >
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


			<PageHeader style={{ backgroundColor: "#D3D3D3" }}
				className="site-page-header"
				onBack={() => window.history.back()}

				title="Post Details"
			/>



			<List style={{ position: "relative", left: '0px', top: '-20px' }} style={{ backgroundColor: "white" }}
				itemLayout="vertical"
				size="large"
				bordered="true"
				itemLayout="vertical"


				dataSource={props.appAuthReducer.post}

				renderItem={item => {

					return (

						<List.Item
							key={item.author}
						>

							<div style={{ borderStyle: "solid", borderWidth: "thin", borderColor: "black", backgroundColor: '#d3d3d3' }}


							>


								<Row style={{ backgroundColor: " grey" }} align="middle">
									<Col span={2} push={1}>
										<List.Item.Meta /*style={{ position: "relative", left: '10px', top: '-25px' }}*/ style={{ height: "2rem", padding: '0%' }}
											avatar={<Avatar src={item.avatar} />}

										//description={item.description}

										/>
									</Col>
									<Col span={10} push={2}>
										<Text style={{ fontSize: 13 }} >
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
									<Col pull={1} span={1}>
										<Button type="text" size="small" >
											<Text > + Friend</Text>
										</Button>
									</Col>
									<Col push={3} span={1}>
										<Button type="text" size="small"  >
											<Text > + Follow</Text>
										</Button>
									</Col>
									<Col push={7} span={1}>
										<Button type="link" /*style={{ position: "relative", left: '20px', top: '5px' }}*/ icon={<MoreOutlined style={{ color: 'black' }} />} />
									</Col>
								</Row>
								<Row style={{ padding: '4%' }} >
									<Col>
										<Text >
											{item.content}
										</Text>
									</Col>
								</Row>


								<List
									grid={{
										column: 4,
										gutter: 100

									}}
									style={{ position: "relative", left: '-10px', top: '-10px' }}

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
								<List style={{ position: "relative", left: '15px', top: '-5px' }} >
									<EnvironmentFilled />
									<Text style={{ position: "relative", left: '10px', top: '0px' }}>
										{item.location}


									</Text>



								</List>


								<List style={{ position: "relative", left: '175px', top: '-27px' }} >

									<Text style={{ position: "relative", left: '50px', top: '0px' }}>
										{item.date}


									</Text>



								</List>

							</div>
							<>
								<Row style={{ width: '100%', backgroundColor: "gray", borderStyle: "solid", borderWidth: "thin", borderColor: "black" }} >
									<Col span="12" style={{ padding: "0.5em" }} >
										<IconText1 icon={ShareAltOutlined} Text={item.shares} key="list-vertical-star-o" postID={item.postID} setShareIncrement={props.setShareIncrement} />
									</Col>
									{/*<Col span="8" style={{ padding: "0.5em" }} push="0" >
									<IconText2 icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" postID={item.postID} getIncrement2={props.getIncrement2} />
								</Col>*/}
									<Col span="12" style={{ padding: "0.5em" }} >
										<IconText3 icon={HeartFilled} Text={item.like} key="list-vertical-message" postID={item.postID} setLikeIncrement={props.setLikeIncrement} />
									</Col>
								</Row>
							</>
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
						<div style={{ backgroundColor: "#D3D3D3" }}>
							<Comment style={{ padding: "3%" }}
								key={item.commentid}
								//actions={item.actions}
								author={<span style={{ fontSize: 13, color: "black" }}>{item.author}</span>}
								avatar={item.avatar}
								content={<span style={{ fontSize: 13, color: "black" ,position:"absolute", top:"2rem", left:"0rem"}}>{item.content}</span>}
								datetime={<span style={{ fontSize: 13, color: "black" }}>{item.date}</span>}
								actions={[
									<IconText4 icon={HeartFilled} Text={item.like} commentID={item.commentid} getIncrement6={props.getIncrement6} key="list-vertical-message" />,
									//<IconText5 icon={MessageFilled} Text={item.comments.length} commentID={item.commentid} getIncrement5={props.getIncrement5}/>,
									<Rate style={{ position: "absolute", top: "15px", left: "2px", fontSize: "0.70rem" }} value={item.rating} />
								]}
							/>
						</div>
					)
				}}

			/>
		</>
	)

}

export default connect(state => state, { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement5, getIncrement6 })(Comments);
