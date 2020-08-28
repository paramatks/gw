import React, { useEffect, useState, componentDidMount } from 'react';
import { Tabs, Row, Col, Typography, Carousel, Card, Button, Space } from 'antd';
import Head from 'next/head'
import authWrapper from '../components/general/authWrapper'
import { connect } from "react-redux"
import Posts from '../components/posts';
import { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement2 } from '../_actions/postsAction';
import { StickyContainer } from 'react-sticky';
import { LoginOutlined } from '@ant-design/icons';
import router from 'next/router'
//import Link from 'next/link'
//import { useRouter } from 'next/router'
//import { withRouter } from 'next/router'

const renderTabBar = (props, DefaultTabBar) => (
	<Row  style={{ backgroundColor: "gray", }} align="middle"  >
		<Col span="5" style={{backgroundColor:"orange"}} >
			<Title style={{ fontSize: '1.25rem',  marginleft:20}}>  Logo </Title>
		</Col>
	
		<Col span="15" style={{backgroundColor:"purple", }}>
			<DefaultTabBar {...props} />
		</Col>
		
		<Col style={{ backgroundColor: "gray", marginleft:20}} span="1">
			<button onClick={() => router.push('/login')} >
				<LoginOutlined style={{ fontSize: '1rem' }} />
			</button>
		</Col>
	</Row>
);

const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

function Gwindex(props) {

	useEffect(() => {
        /*
		const isLoggedin = props.appAuthReducer.isLoggedIn;

		if (isLoggedin == false) {
			router.push({
				pathname: '/login',
			})
        }
        */
	}, [])

	return (
		<>
			<Head>
				<title>We Work</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<StickyContainer >

				<Tabs type="card" defaultActiveKey="1"  renderTabBar={renderTabBar} >

					<TabPane tab={<span style={{ fontSize: 14.5, color: "black" }}>Popular</span>} key="1"  >
						<Carousel autoplay={true} dots={false}>
							<div>
								<img style={{ position: "relative", top: "auto", height: 'auto', width: 'auto', objectFit: 'cover' }}
									src="/images/welcome.png"
								/>
							</div>
							<div>
								<img style={{ postiton: "relative", top: "auto", height: 'auto', width: 'auto', objectFit: 'cover' }}
									src="/images/Welcome 2.png"
								/>
							</div>
						</Carousel>
						<Posts postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
					</TabPane>
					<TabPane tab={<span style={{ fontSize: 14.5, color: "black" }}>New Demand</span>} key="2"  >
						<Posts postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
					</TabPane>

				</Tabs>
			</StickyContainer>

		</>
	)

}

export default connect(state => state, { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement2 })(authWrapper(Gwindex));