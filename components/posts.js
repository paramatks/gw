import React, { useState, useEffect } from 'react';
import { Tabs, Button, Avatar, Rate, List, Typography, Card, Space, Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { HeartFilled, MessageFilled, ShareAltOutlined, MoreOutlined, EnvironmentFilled, LoginOutlined } from '@ant-design/icons';
import router from 'next/router'



const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

const IconText2 = ({ icon, Text, postID, getIncrement2 }) => (
	<div onClick={() => {
		{
			getIncrement2(postID); router.push({
				pathname: '/comments',
			});
		}
	}}  >


		<Space size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>

)



const IconText3 = ({ icon, Text, postID, setLikeIncrement }) => (
	<div onClick={() => { setLikeIncrement(postID) }}>
		<Space size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText1 = ({ icon, Text, postID, setShareIncrement }) => (
	<div onClick={() => { setShareIncrement(postID) }}>
		<Space size="middle">
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

function callback(key) {
	console.log(key);
}

const actions = {
	increment: () => {
		return {
			type: 'GET_INCREMENT',
		}
	}
}


function Posts(props) {

	useEffect(() => {
		//props.getIncrement(999)

	}, []);

	return (
		<List className="postsliststyle"/*style={{ backgroundColor: "white" }}*/
			itemLayout="vertical"
			size="large"
			bordered="true"
			pagination={{
				onChange: page => {
					console.log(page);
				},
				pageSize: 3,
				responsive: true
			}}
			dataSource={props.postlist}

			renderItem={item => {
				//console.log(props);
				return (
					<List.Item
						key={item.author}
					>

						<div className="postsdivstyle"
						/*{
							//if type == common then we render 999, else then we render orange
							(item.type == "common") ? { backgroundColor: '#d3d3d3' } : { backgroundColor: '#d3d3d3' }

						}*/
						>


							<Row className="postsavatarowstyle" /*style={{ backgroundColor: "grey" }}*/ align="middle">
								<Col span={2} className="postsavatarstyle"  /*style={{ marginLeft: "0.25rem", marginTop: "0.75rem", marginRight: "0.25rem"}}*/ >
									<List.Item.Meta
										avatar={<Avatar src={item.avatar} />}
									/>
								</Col>
								<Col span={8} className="postsauthorcolstyle" /*style={{ marginLeft: "0.5rem", marginTop: "0.75rem", marginBottom: "0.75rem" }}*/ >
									<Space direction="vertical" size={0}>
										<Text className="postsauthortextstyle" /*style={{ fontSize: 13 }}*/ >
											{item.author}
										</Text>
										<Rate className="postsratestyle" /*style={{ fontSize: 10 }}*/ value={item.rating} />
									</Space>

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
								<Col span={5} className="postsfriendfollowstyle" /*style={{ marginRight: "0.25rem" }}*/ >
									<Button type="text" size="small"  >
										<Text > + Friend</Text>
									</Button>
								</Col>
								<Col span={5} className="postsfriendfollowstyle"  /*style={{ marginRight: "0.25rem" }}*/ >
									<Button type="text" size="small" >
										<Text > + Follow</Text>
									</Button>
								</Col>
								<Col span={2}>
									<Button type="link" icon={<MoreOutlined className="postsmorebuttonstyle"  /*style={{ color: 'black' }}*/ />} />
								</Col>
							</Row>
							<Row align="middle" className="postscontentstyle" /*style={{ marginLeft: "1rem", marginTop: "0.75rem", marginBottom: "0.25rem"}}*/ >
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
								dataSource={item.images}
								renderItem={imageItem => (
									<List.Item>
										<img
											src={imageItem.uri}
											width={100}
											/*style={{ position: "relative", left: '0px', top: '0px', height: '100px', width: '100px', objectFit: 'cover' }}*/
											className="postsimgstyle"
											alt="logo"
										/>
									</List.Item>

								)}
							/>
							<Row className="postsbottomrowstyle" /*style={{ marginLeft: "0.6rem" }}*/ align="middle" >
								<Col span="1" className="postslocationiconstyle" /*style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}*/>
									<EnvironmentFilled />
								</Col>
								<Col span="7" className="postslocationtextstyle"/*style={{ marginLeft: "0.5rem", marginBottom: "0.6rem" }}*/>
									<Text>
										{item.location}
									</Text>
								</Col>
								<Col span="11" className="postsdatestyle" /*style={{ marginLeft: "2rem", marginBottom: "0.6rem" }}*/ >
									<Row justify="end">
										<Text >
											{item.date}
										</Text>
									</Row>

								</Col>
							</Row>




						</div>
						<>
							<Row className="postsactioncolstyle"/*style={{ width: '100%', backgroundColor: "gray", borderStyle: "solid", borderWidth: "thin", borderColor: "black" }}*/ >
								<Col span="6" className="postsshareheartactionstyle" /*style={{ marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "1rem" }}*/ >
									<IconText1 icon={ShareAltOutlined} Text={item.shares} key="list-vertical-star-o" postID={item.postID} setShareIncrement={props.setShareIncrement} />
								</Col>
								<Col span="6" className="postscommentactionstyle" /*style={{ marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "1.5rem" }}*/>
									<IconText2 icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" postID={item.postID} getIncrement2={props.getIncrement2} />
								</Col>
								<Col span="6" className="postsshareheartactionstyle"/*style={{ marginTop: "0.6rem", marginBottom: "0.6rem", marginLeft: "1rem" }}*/ >
									<IconText3 icon={HeartFilled} Text={item.like} key="list-vertical-message" postID={item.postID} setLikeIncrement={props.setLikeIncrement} />
								</Col>
							</Row>
						</>
					</List.Item>
				)
			}}
		/>

	)
}


export default Posts;
