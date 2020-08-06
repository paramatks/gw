import React, { useState, useEffect } from 'react';
import { Tabs, Button, Avatar, Rate, List, Typography, Card, Space, } from 'antd';
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
	}} style={{ backgroundColor: "black" }} >


		<Space style={{ position: "relative", left: "50px", top: "-5px" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>

)

/*IconText2.then(router.push({
   pathname: '/comments',
 }))*/

const IconText3 = ({ icon, Text, postID, getIncrement1 }) => (
	<div onClick={() => { getIncrement1(postID) }}>
		<Space style={{ position: "relative", left: "75px", top: "-5px" }} size="middle" >
			{React.createElement(icon)}
			{Text}
		</Space>
	</div>
);

const IconText1 = ({ icon, Text, postID, getIncrement3 }) => (
	<div onClick={() => { getIncrement3(postID) }}>
		<Space size="middle" >
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
		<List style={{ position: "relative", left: '0px', top: '-20px' }}
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
							<IconText1 icon={ShareAltOutlined} Text={item.shares} key="list-vertical-star-o" postID={item.postID} getIncrement3={props.getIncrement3} />,
							<IconText2 icon={MessageFilled} Text={item.comments.length} key="list-vertical-like-o" postID={item.postID} getIncrement2={props.getIncrement2} style={{ position: "relative", left: '50px', top: '0px' }} />,
							//<IconText icon={HeartFilled} Text={item.like} key="list-vertical-message" />,
							<IconText3 icon={HeartFilled} Text={item.like} key="list-vertical-message" postID={item.postID} getIncrement1={props.getIncrement1} />

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
								(item.type == "common") ? { backgroundColor: '#999' } : { backgroundColor: 'orange' }

							}
						>
							<Rate style={{ position: "relative", left: '55px', top: '30px' }} value={item.rating} />

							<Button type="text" size="small" style={{ position: "relative", left: '55px', top: '3px' }} >
								<Text > + Friend</Text>
							</Button>
							<Button type="text" size="small" style={{ position: "relative", left: '45px', top: '3px' }} >
								<Text > + Follow</Text>
							</Button>
							<Button type="link" style={{ position: "relative", left: '30px', top: '5px' }} icon={<MoreOutlined style={{ color: 'gray' }} />} />


							<List.Item.Meta style={{ position: "relative", left: '10px', top: '-25px' }}
								avatar={<Avatar src={item.avatar} />}
								title={item.author}
							//description={item.description}

							/>
							<List style={{ position: "relative", left: '10px', top: '-15px' }} >
								{item.content}


							</List>


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
