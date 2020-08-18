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
	}} /*style={{ backgroundColor: "black" }}*/ >


		<Space style={{ position: "relative", left: "0px", top: "-5px" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>

)

/*IconText2.then(router.push({
   pathname: '/comments',
 }))*/

const IconText3 = ({ icon, Text, postID, setLikeIncrement }) => (
	<div onClick={() => { setLikeIncrement(postID) }}>
		<Space style={{ position: "relative", left: "0px", top: "-5px" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText1 = ({ icon, Text, postID, setShareIncrement }) => (
	<div onClick={() => { setShareIncrement(postID) }}>
		<Space size="middle" style={{ position: "relative", left: "0px", top: "-5px" }} >
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
		<List style={{ position: "relative", left: '0px', top: '-20px' }} style={{ backgroundColor: "white" }}
			itemLayout="vertical"
			size="large"
			bordered="true"
			pagination={{
				onChange: page => {
					console.log(page);
				},
				pageSize: 3,
			}}
			dataSource={props.postlist}

			renderItem={item => {
				//console.log(props);
				return (
					<List.Item
						key={item.author}
						actions={[
							<IconText1 icon={ShareAltOutlined} Text={item.shares} key="list-vertical-star-o" postID={item.postID} setShareIncrement={props.setShareIncrement} />,
							<IconText2 icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" postID={item.postID} getIncrement2={props.getIncrement2} />,
							//<IconText icon={HeartFilled} Text={item.like} key="list-vertical-message" />,
							<IconText3 icon={HeartFilled} Text={item.like} key="list-vertical-message" postID={item.postID} setLikeIncrement={props.setLikeIncrement} />

						]}
					//extra={
					//<img
					//src= {item.images}                                  
					//width={272}
					//style={{position:"relative", left: '0px', top: '50px'}}
					//alt="logo"
					//src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
					///>
					//} 


					>
						<div
							style={
								//if type == common then we render 999, else then we render orange
								(item.type == "common") ? { backgroundColor: '#d3d3d3' } : { backgroundColor: '#d3d3d3' }

							}
						>


							<Row style={{backgroundColor:" grey"}} align="middle">
								<Col span={2} push={0}>
									<List.Item.Meta /*style={{ position: "relative", left: '10px', top: '-25px' }}*/ style={{padding:'10%'}}
										avatar={<Avatar src={item.avatar} />}

									//description={item.description}

									/>
								</Col>
								<Col span={10} push={1} >
									<Text >
										{item.author}
									</Text>

									<br />
									<Rate style={{ fontSize: 14 }} value={item.rating} />



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
							<Row >
								<Col push={1}>
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
					</List.Item>
				)
			}}
		/>

	)
}


export default Posts;
