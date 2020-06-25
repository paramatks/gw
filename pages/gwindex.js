import React, { useEffect } from 'react';
import { Tabs, Row, Col, Typography, Carousel, Card, Space, Layout } from 'antd';
import Head from 'next/head'
import { createFromIconfontCN } from '@ant-design/icons';
import { connect } from "react-redux"
import Posts from '../components/posts';
import { getPopularPosts, getNewDemand } from '../_actions/postsAction';
import { StickyContainer, Sticky } from 'react-sticky';






const renderTabBar = (props, DefaultTabBar) => (
  <Row justify="center" style={{ backgroundColor: 'gray' }} align="top" >
    <Col pull="4">
      <Title strong="true" level={4}>  Logo </Title>
    </Col>
    <Col pull="2">
      <DefaultTabBar {...props} />
    </Col>
  </Row>
);


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});



const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;







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

      <Head>
        <title>We Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <StickyContainer>

        <Tabs type="card" defaultActiveKey="1" onChange={callback} renderTabBar={renderTabBar}>


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

            <Posts postlist={props.appAuthReducer.posts} />
          </TabPane>

          <TabPane tab="New Demand" key="2">
            <Posts postlist={props.appAuthReducer.newDemand} />
          </TabPane>

        </Tabs>
      </StickyContainer>,


    </>
  )
}


export default connect(state => state, { getPopularPosts, getNewDemand })(Gwindex);