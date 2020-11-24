import React, { useEffect } from 'react';
import { Tabs, Row, Col, Button, Typography } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import Newposts from '../components/newposts';
import { BellOutlined, CameraOutlined, HomeOutlined, MessageOutlined, RocketOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import router from 'next/router'

const { Text } = Typography;

const renderTabBar = (props, DefaultTabBar) => (
	<div>
		<Row className="indexnewstyle" align="middle" justify="center" >
			<Col span="3" className="indexnewcameracolstyle">
				<Button type="link" >
					<CameraOutlined className="indexnewcamerastyle" />
				</Button>
			</Col>
			<Col span="7" className="indexnewlogocolstyle" >
				<img className="indexnewlogoimgstyle"
					src="images\Goodwork_6A rev SC_cropped_transparentBackground.png"
				/>
			</Col>
			<Col className="indexnewbellcolstyle" span="3">
				<Button type="link">
					<BellOutlined style={{ fontSize: '1.5rem', color: "white" }} />
				</Button>
			</Col>
		</Row>

		<Row justify="start" >
			<Col span="24" className="indexnewtabbarcolstyle">
				<DefaultTabBar {...props} />
			</Col>
		</Row>

	</div>
);

const { TabPane } = Tabs;

function newGwIndex(props) {

	useEffect(() => {

	}, [])

	return (
		<>
			<Head>
				<title>GoodWork</title>
				<link rel="icon" href="/images\Goodwork_6A rev SC_cropped_transparentBackground.png" />
			</Head>

			<Tabs type="card" defaultActiveKey="1" renderTabBar={renderTabBar} >
				<TabPane tab={<span className="indexnewfriendstabpane">Friends</span>} key="1"  >
					<Newposts postlist={props.appAuthReducer.posts} />
				</TabPane>
				<TabPane tab={<span className="indexnewfollowpopulartabpanes">Follow</span>} key="2"  >
					<Newposts postlist={props.appAuthReducer.posts} />
				</TabPane>
				<TabPane tab={<span className="indexnewfollowpopulartabpanes">Popular</span>} key="3" >
					<Newposts postlist={props.appAuthReducer.posts} />
				</TabPane>
			</Tabs>

			<Row align="top" className="footernewindexrowstyle">
				<Col span="4" className="footerhomemessagescolstyle">
					<Button size="large" type="link" className="footerbuttonstyle"
						onClick={() => { router.push({ pathname: '/newgwindex' }); }}
					>
						<HomeOutlined className="footericonstyle" />
					</Button>
					<Text className="footerhometextstyle">
						Home
					</Text>
				</Col>
				<Col span="5" className="footerhomemessagescolstyle">
					<Button size="large" type="link" className="footerbuttonstyle"
						onClick={() => { router.push({ pathname: '/messages' }); }}
					>
						<MessageOutlined className="footericonstyle" />
					</Button>
					<Text className="footermessagestextstyle">
						Messages
					</Text>
				</Col>
				<Col span="4" className="footercolrocketstyle">
					<Button size="large" type="link" className="footerbuttonstyle"
						onClick={() => { router.push({ pathname: '/newpost' }); }}
					>
						<RocketOutlined className="footericonrocketstyle" />
					</Button>
				</Col>
				<Col span="4" className="footerorderscolstyle">
					<Button size="large" type="link" className="footerbuttonstyle"
						onClick={() => { router.push({ pathname: '/orders' }); }}
					>
						<MenuOutlined className="footericonstyle" />
					</Button>
					<Text className="footerorderstextstyle">
						Orders
					</Text>
				</Col>
				<Col span="4" className="footerprofilecolstyle">
					<Button size="large" type="link" className="footerbuttonstyle"
						onClick={() => { router.push({ pathname: '/profile' }); }}
					>
						<UserOutlined className="footericonstyle" />
					</Button>
					<Text className="footerprofiletextstyle">
						Profile
					</Text>
				</Col>
			</Row>

		</>
	)
}

export default connect(state => state)(newGwIndex);