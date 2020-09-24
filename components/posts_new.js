import React, { useEffect } from 'react';
import { Button, Avatar, Rate, List, Typography, Space, Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { MoreOutlined, EnvironmentFilled } from '@ant-design/icons';

const { Text } = Typography;

function Postsnew(props) {

	useEffect(() => {
		//props.getIncrement(999)

	}, []);

	return (
		<List className="postsnewliststyle"/*style={{ backgroundColor: "white" }}*/
			itemLayout="vertical"
			bordered="true"
			/*pagination={{
				onChange: page => {
					console.log(page);
				},
				pageSize: 3,
				responsive: true
			}}*/
			dataSource={props.postlist}
			renderItem={item => {
				//console.log(props);
				return (
					<>

						<Row className="postsnewavatarowstyle" /*style={{ backgroundColor: "grey" }}*/ align="middle">
							<Col span={2} className="postsnewavatarstyle"  /*style={{ marginLeft: "0.25rem", marginTop: "0.75rem", marginRight: "0.25rem"}}*/ >
								<Avatar src={item.avatar} />
							</Col>
							<Col span={6} className="postsnewauthorcolstyle" /*style={{ marginLeft: "0.5rem", marginTop: "0.75rem", marginBottom: "0.75rem" }}*/ >
								<Space direction="vertical" size={0}>
									<Text className="postsnewauthortextstyle" /*style={{ fontSize: 13 }}*/ >
										{item.author}
									</Text>
									<Rate className="postsnewratestyle" /*style={{ fontSize: 10 }}*/ value={item.rating} />
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
							<Col span={5} className="postsnewfriendfollowstyle" /*style={{ marginRight: "0.25rem" }}*/ >
								<Button type="text" size="small" className="postsnewfriendbuttonstyle"  >
									<Text className="postsnewfriendtextstyle" > + Friend</Text>
								</Button>
							</Col>
							<Col span={5} className="postsnewfriendfollowstyle"  /*style={{ marginRight: "0.25rem" }}*/ >
								<Button type="text" size="small" className="postsnewfollowbuttonstyle" >
									<Text className="postsnewfollowtextstyle" > + Follow</Text>
								</Button>
							</Col>
							<Col span={2} >
								<Button type="link" icon={<MoreOutlined className="postsnewmorebuttonstyle"  /*style={{ color: 'black' }}*/ />} />
							</Col>
						</Row>
						<Row align="middle" className="postsnewcontentstyle" /*style={{ marginLeft: "1rem", marginTop: "0.75rem", marginBottom: "0.25rem"}}*/ >
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
										className="postsnewimgstyle"
										alt="logo"
									/>
								</List.Item>

							)}
						/>
						<Row className="postsnewbottomrowstyle" /*style={{ marginLeft: "0.6rem" }}*/ align="middle" >
							<Col span="1" className="postsnewlocationiconcolstyle" /*style={{ marginRight: "0.6rem", marginBottom: "0.6rem" }}*/>
								<EnvironmentFilled className="postsnewlocatoniconstyle" />
							</Col>
							<Col span="7" className="postsnewlocationtextcolstyle"/*style={{ marginLeft: "0.5rem", marginBottom: "0.6rem" }}*/>
								<Text className="postsnewlocationtextstyle">
									{item.location}
								</Text>
							</Col>
							<Col span="11" className="postsnewsdatecolstyle" /*style={{ marginLeft: "2rem", marginBottom: "0.6rem" }}*/ >
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


export default Postsnew;
