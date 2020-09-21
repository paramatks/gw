import React, { useEffect } from 'react';
import { Tabs, Row, Col,  Button } from 'antd';
import Head from 'next/head'
import { connect } from "react-redux"
import Postsnew from '../components/posts_new';
import { StickyContainer } from 'react-sticky';
import { BellOutlined, CameraOutlined } from '@ant-design/icons';

const renderTabBar = (props, DefaultTabBar) => (
	<div >
		<Row className="indexnewstyle" align="middle" justify="center">
			<Col span="3" style={{ marginRight: "5rem" }}>
				<Button style={{ backgroundColor: "transparent", borderStyle: "none" }}>
					<CameraOutlined style={{ fontSize: '1rem', color: "white" }} />
				</Button>
			</Col>

			<Col span="7" >
				<img style={{ objectFit: "cover", position: "relative", height: '5rem', width: '6rem' }}
					src="images\Goodwork_6A rev SC_cropped_transparentBackground.png"
				/>
			</Col>

			<Col /*style={{ marginRight: "1rem" }}*/ style={{ marginLeft: "4rem" }} span="3">
				<Button /*onClick={() => router.push('/login')}*/ style={{ backgroundColor: "transparent", borderStyle: "none" }}>
					<BellOutlined style={{ fontSize: '1rem', color: "white" }} />
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
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<StickyContainer >

				<Tabs type="card" defaultActiveKey="1" renderTabBar={renderTabBar} >

					<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft: "1.5rem" }}>Friends</span>} key="1"  >
						<Postsnew postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
					</TabPane>
					<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft:"3rem" }}>Follow</span>} key="2"  >
						<Postsnew postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
					</TabPane>
					<TabPane tab={<span style={{ fontSize: 14.5, color: "black", marginLeft:"3rem" }}>Popular</span>} key="3" >
						<Postsnew postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
					</TabPane>
				</Tabs>
			</StickyContainer>

		</>
	)

}

export default connect(state => state)(Gwindexnew);