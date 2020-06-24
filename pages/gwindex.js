import React, { useState, useEffect, useCallback } from 'react';
import { Tabs, Row, Col, Typography, Carousel, Card, Space } from 'antd';
import Head from 'next/head'
import { createFromIconfontCN } from '@ant-design/icons';
import { connect } from "react-redux"
import Posts from '../components/posts';
import { getPopularPosts, getNewDemand } from '../_actions/postsAction';




const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});



const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);






const Gwindex = (props) => {

  useEffect(() => {
    // use the getPopularPosts action to init the data
    props.getPopularPosts();
    //props.getNewDemand();

  }, []);


  function callback(activeKey) {
    console.log(activeKey);
    //props.getNewDemand();
    if (activeKey == 2) {
      props.getNewDemand();
    } else if (activeKey == 1) {
      props.getPopularPosts();

    }

  }


 





  /*useCallback(() => {
      
   
       useEffect(() => {
        props.getNewDemand();
  
  
       }, []);
           
         },
         
         [],
  ); */


  return (
    <>
      <div className="container">
        <Head>
          <title>We Work</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Row style={{ backgroundColor: 'gray' }} align="top" >
          <Col offset={1} >
            <Title strong="true" level={4}>  Logo </Title>
          </Col>
        </Row>
        <Row style={{ position: "relative", left: "0px", top: '0px' }}>
        
          <Tabs type=" card" defaultActiveKey="1" onChange={callback} tabPosition="top" tabBarGutter="100px">
            

            <TabPane tab="Popular" key="1"  >
              <Carousel autoplay={true} dots={false} style={{ position: "relative", left: '0px', top: '-15px' }} >
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

              <Posts postlist={props.appAuthReducer.posts} />
            </TabPane>

            <TabPane tab="New Demand" key="2">
              <Posts postlist={props.appAuthReducer.newDemand} />
            </TabPane>

          </Tabs>
        </Row>
      </div>
    </>
  )
}
export default connect(state => state, { getPopularPosts, getNewDemand })(Gwindex);