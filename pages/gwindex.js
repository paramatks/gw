import { Tabs, Form, Input, Checkbox, Grid, Tag, Row, Col, Layout, Space, PageHeader, Button, Typography, Carousel, Card, Avatar, Rate  } from 'antd';
import Head from 'next/head'
import { createFromIconfontCN } from '@ant-design/icons';
import { CloseOutlined, EditOutlined, EllipsisOutlined, SettingOutlined   } from '@ant-design/icons';
import { connect } from "react-redux"


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


const gwindex = (props) => {
  console.log(props.appAuthReducer.posts)
return (
   <>
      <div className="container">
        <Head>
          <title>We Work</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
     
       
          
    <Row style={{backgroundColor:'gray'}} align="middle" >
        <Col offset={1} >
        <Title strong="true" level={4}>  Logo</Title>
        </Col>


        <Tabs defaultActiveKey="1" onChange={callback} >
    <TabPane tab="Popular" key="1">
    <Carousel autoplay="true" dots="false" >
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

  <Row  >
  <Col>
    
      <Avatar size="large" src=" "></Avatar>
      </Col>
      <Col offset = {1}>

      <Text>Username</Text>
      <Rate />
      
      
      </Col>
  
    
 
    </Row>
    <Row>
    
    <Card
    cover={<img src =" "/>}

  >
       
  </Card>
 
  </Row>
  
    </TabPane>
    <TabPane tab="New Demand" key="2">
      
    </TabPane>
  
  </Tabs>
       
        
      <Col offset={8}>
      <Button type="text" icon={<CloseOutlined style={{backgroundColor:'gray'}}   />} style={{backgroundColor:'gray'}} />
      </Col>
    </Row>

   
  
  
 
</div>

</>
    )
  }
  export default connect(state => state)(gwindex);

      //actions={[
      //<SettingOutlined key="setting" />,
     // <EditOutlined key="edit" />,
    //  <EllipsisOutlined key="ellipsis" />,
  //  ]}
  
 
  

