import React, { useEffect } from 'react';
import { Tabs, Row, Col, Button, Typography } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import Newposts from '../components/newposts';
import { BellOutlined, CameraOutlined, HomeOutlined, MessageOutlined, RocketOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import router from 'next/router'

const { Text } = Typography;


const renderTabBar = (props, DefaultTabBar) => (
	<div >
		<Row className="indexnewstyle" align="middle" justify="center" >
			<Col span="3" style={{ marginRight: "5rem" }}>
				<Button style={{ backgroundColor: "transparent", borderStyle: "none" }}>
					<CameraOutlined style={{ fontSize: '1.5rem', color: "white" }} />
				</Button>
			</Col>

			<Col span="7" style={{ marginTop: "0.75rem", marginBottom: "0.25rem" }} >
				<img style={{ objectFit: "cover", position: "relative", height: '5rem', width: '6rem' }}
					src="images\Goodwork_6A rev SC_cropped_transparentBackground.png"
				/>
			</Col>

			<Col /*style={{ marginRight: "1rem" }}*/ style={{ marginLeft: "4rem" }} span="3">
				<Button /*onClick={() => router.push('/login')}*/ style={{ backgroundColor: "transparent", borderStyle: "none" }}>
					<BellOutlined style={{ fontSize: '1.5rem', color: "white" }} />
				</Button>
			</Col>
		</Row>

		<Row justify="start" >
			<Col span="24" style={{ backgroundColor: "white" }}>
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

				<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft: "1.5rem" }}>Friends</span>} key="1"  >
					<Newposts postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
				</TabPane>
				<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft: "3rem" }}>Follow</span>} key="2"  >
					<Newposts postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
				</TabPane>
				<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft: "3rem" }}>Popular</span>} key="3" >
					<Newposts postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
				</TabPane>
			</Tabs>
			<Row align="top" style={{ marginTop: "0.5rem", position: "sticky", bottom: "0", backgroundColor:"white" }}>
				<Col span="4" style={{ marginLeft: "0.5rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
						onClick={() => { router.push({ pathname: '/newgwindex' }); }}
					>
						<HomeOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>

					<Text style={{ marginTop: "0.5rem", marginLeft: "0.75rem" }}>
						Home
					</Text>
				</Col>

				<Col span="5" style={{ marginLeft: "0.5rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
						onClick={() => { router.push({ pathname: '/messages' }); }}
					>
						<MessageOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>

					<Text style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}>
						Messages
					</Text>
				</Col>

				<Col span="4" style={{ marginLeft: "-0.5rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
						onClick={() => { router.push({ pathname: '/newpost' }); }}
					>
						<RocketOutlined style={{ fontSize: '3rem', color: "#ff8235" }} />
					</Button>
				</Col>

				<Col span="4" style={{ marginLeft: "1rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
						onClick={() => { router.push({ pathname: '/orders' }); }}
					>
						<MenuOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>
					<Text style={{ marginLeft: "0.65rem", marginTop: "0.5rem" }}>
						Orders
					</Text>
				</Col>

				<Col span="4" style={{ marginLeft: "0rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}
						onClick={() => { router.push({ pathname: '/profile' }); }}
					>
						<UserOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>
					<Text style={{ marginLeft: "0.75rem", marginTop: "0.5rem" }}>
						Profile
					</Text>
				</Col>
			</Row>
		</>
	)
}

export default connect(state => state,)(newGwIndex);