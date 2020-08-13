import React, { useEffect, useState, componentDidMount } from 'react';
import { Tabs, Row, Col, Typography, Carousel, Card, Button } from 'antd';
import Head from 'next/head'
import authWrapper from '../components/general/authWrapper'
import { connect } from "react-redux"
import Posts from '../components/posts';
import { getPopularPosts, getNewDemand, getIncrement1, getIncrement2, getIncrement3 } from '../_actions/postsAction';
import { StickyContainer } from 'react-sticky';
import { LoginOutlined } from '@ant-design/icons';
import router from 'next/router'
//import Link from 'next/link'
//import { useRouter } from 'next/router'
//import { withRouter } from 'next/router'


const renderTabBar = (props, DefaultTabBar) => (
	<Row justify="center" style={{ backgroundColor: 'gray' }} align="middle" >
		<Col pull="4">
			<Title strong="true" level={4}>  Logo </Title>
		</Col>
		<Col pull="2">
			<DefaultTabBar {...props} />
		</Col>
		<Col push="3" style={{ backgroundColor: "orange" }}>
			<button onClick={() => router.push('/login')}>
				<LoginOutlined />
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


			<StickyContainer>

				<Tabs type="card" defaultActiveKey="1" /*onChange={callback}*/ renderTabBar={renderTabBar}>


					<TabPane tab="Popular" key="1"   >

						<Carousel autoplay={true} dots={false} style={{ position: "relative", left: '0px', top: '0px' }} >
							<div>

								<img
									src="/images/welcome.png"
								/>
							</div>
							<div>
								<img
									src="/images/Welcome 2.png"
								/>
							</div>
						</Carousel>

						<Posts postlist={props.appAuthReducer.posts} getIncrement1={props.getIncrement1} getIncrement2={props.getIncrement2} getIncrement3={props.getIncrement3} />
					</TabPane>

					<TabPane tab="New Demand" key="2">
						<Posts postlist={props.appAuthReducer.posts} getIncrement1={props.getIncrement1} getIncrement2={props.getIncrement2} getIncrement3={props.getIncrement3} />
					</TabPane>

				</Tabs>
			</StickyContainer>

		</>
	)

}








export default connect(state => state, { getPopularPosts, getNewDemand, getIncrement1, getIncrement2, getIncrement3 })(authWrapper(Gwindex));