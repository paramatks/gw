import React, { useEffect, useState, componentDidMount } from 'react';
import { Tabs, Row, Col, Typography, Carousel, Card, Button } from 'antd';
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
	<Row justify="center"  style={{backgroundColor:"gray", height:'3rem'}} align="middle"  >
		<Col pull="3">
			<Title style={{fontSize:'1.25rem',height:"4.5rem"}}>  Logo </Title>
		</Col>
		<Col  >
			<DefaultTabBar {...props}  />
		</Col>
		<Col push="3" style={{ backgroundColor: "gray" , height:"5rem"}}>
			<button onClick={() => router.push('/login')} >
				<LoginOutlined  style={{fontSize:'1rem'}}/>
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


			<StickyContainer /*style={{backgroundColor: "orange"}}*/>

				<Tabs type="card" defaultActiveKey="1" /*onChange={callback}*/ renderTabBar={renderTabBar} >


					<TabPane /*tab="Popular"*/ tab={<span style={{fontSize:14.5, height:"5.5em"}}>Popular</span>} key="1"  >

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

						<Posts postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
					</TabPane>

					<TabPane /*tab="New Demand"*/  tab={<span style={{fontSize:14.5, height:"5.5em"}}>New Demand</span>} key="2" /*style={{backgroundColor: "orange"}}*/ >
						<Posts postlist={props.appAuthReducer.posts} setLikeIncrement={props.setLikeIncrement} getIncrement2={props.getIncrement2} setShareIncrement={props.setShareIncrement} />
					</TabPane>

				</Tabs>
			</StickyContainer>

		</>
	)

}








export default connect(state => state, { getPopularPosts, getNewDemand, setLikeIncrement, setShareIncrement, setCommentLikeIncrement, getIncrement2 })(authWrapper(Gwindex));