import React, { useEffect } from 'react';
import { Avatar,  List, Comment, PageHeader, Row, Col, Card, Rating, Space } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import { getPopularPosts, getNewDemand } from '../_actions/postsAction';
import {  ShareAltOutlined, HeartFilled, MessageFilled, } from '@ant-design/icons';
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Form, Input,  } from 'formik-antd';


const { Meta } = Card;



const listData = [];




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

			dataSource={props.appAuthReducer.posts}

			renderItem={item => {
			
				return (
			
				<List.Item
					key={item.author}
					actions={[
						<IconText icon={ShareAltOutlined} Text={item.shares} key="list-vertical-star-o" />,
						<IconText icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" />,
						<IconText icon={HeartFilled} Text={item.like} key="list-vertical-message" />,
					]}
					extra={
						<img
							width={272}
							alt="logo"
							src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
						/>
					}
				>
				
						<List.Item.Meta>							
							avatar={<Avatar src={item.avatar} />}
							title={item.author}
							//description={item.description}
						</List.Item.Meta>
							{item.content}
				

				
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
				
				)}}
		/>
	)
	</>

	)
}



export default connect(state => state, { getPopularPosts, getNewDemand })(Comments);
