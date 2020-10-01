import React, { useEffect } from 'react';
import { Tabs, Row, Col, Button, Typography } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import Postsnew from '../components/posts_new';
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

function Gwindexnew(props) {

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
					<Postsnew postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
				</TabPane>
				<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft: "3rem" }}>Follow</span>} key="2"  >
					<Postsnew postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
				</TabPane>
				<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft: "3rem" }}>Popular</span>} key="3" >
					<Postsnew postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
				</TabPane>
			</Tabs>
			<Row align="top" style={{ marginTop: "0.5rem" }}>
				<Col span="4" style={{ marginLeft: "0.5rem" }}>

					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}>
						<HomeOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>

					<Text style={{ marginTop: "0.5rem", marginLeft: "0.75rem" }}>
						Home

					</Text>

				</Col>

				<Col span="4" style={{ marginLeft: "0.5rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}>
						<MessageOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>

					<Text style={{ marginLeft: "0.25rem", marginTop: "0.5rem" }}>
						Message
					</Text>

				</Col>
				<Col span="4" style={{ marginLeft: "0.5rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}>
						<RocketOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>


				</Col>

				<Col span="4" style={{ marginLeft: "0.5rem" }}>
					<Button size="large" style={{ backgroundColor: "transparent", borderStyle: "none", marginBottom: "0.5rem" }}>
						<MenuOutlined style={{ fontSize: '2rem', color: "#ff8235" }} />
					</Button>
					<Text style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
						Orders
					</Text>
				</Col>

				<Col span="4" style={{ marginLeft: "0.5rem" }}>
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

export default connect(state => state,)(Gwindexnew);