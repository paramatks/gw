import React, { useEffect } from 'react';
import { Button, Avatar, Rate, List, Typography, Space, Row, Col } from 'antd';
import { MoreOutlined, EnvironmentFilled } from '@ant-design/icons';

const { Text } = Typography;

function newPost(props) {

	useEffect(() => {

	}, []);

	return (
		<List className="postsnewliststyle"
			itemLayout="vertical"
			bordered="true"
			dataSource={props.postlist}
			renderItem={item => {
				return (
					<>

						<Row className="postsnewavatarowstyle" align="middle">
							<Col span={2} className="postsnewavatarstyle"   >
								<Avatar src={item.avatar} />
							</Col>
							<Col span={6} className="postsnewauthorcolstyle" >
								<Space direction="vertical" size={0}>
									<Text className="postsnewauthortextstyle"  >
										{item.author}
									</Text>
									<Rate className="postsnewratestyle" value={item.rating} />
								</Space>

							</Col>
							<Col span={5} className="postsnewfriendfollowstyle"  >
								<Button type="text" size="small" className="postsnewfriendbuttonstyle"  >
									<Text className="postsnewfriendtextstyle" > + Friend</Text>
								</Button>
							</Col>
							<Col span={5} className="postsnewfriendfollowstyle"   >
								<Button type="text" size="small" className="postsnewfollowbuttonstyle" >
									<Text className="postsnewfollowtextstyle" > + Follow</Text>
								</Button>
							</Col>
							<Col span={2} >
								<Button type="link" icon={<MoreOutlined className="postsnewmorebuttonstyle" />} />
							</Col>
						</Row>
						<Row align="middle" className="postsnewcontentstyle"  >
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
										className="postsnewimgstyle"
										alt="logo"
									/>
								</List.Item>
							)}
						/>
						<Row className="postsnewbottomrowstyle" align="middle" >
							<Col span="1" className="postsnewlocationiconcolstyle" >
								<EnvironmentFilled className="postsnewlocatoniconstyle" />
							</Col>
							<Col span="7" className="postsnewlocationtextcolstyle">
								<Text className="postsnewlocationtextstyle">
									{item.location}
								</Text>
							</Col>
							<Col span="11" className="postsnewsdatecolstyle"  >
								<Row justify="end">
									<Text className="postsnewdatestextsyle" >
										{item.date}
									</Text>
								</Row>
							</Col>
						</Row>
					</>
				)
			}}
		/>
	)
}

export default newPost;
