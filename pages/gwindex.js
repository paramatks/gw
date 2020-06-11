import { Tabs, Form, Input, Checkbox, Grid, Tag, Row, Col, Layout,  PageHeader, Button, Typography, Carousel, Card, Avatar, Rate, List, Space  } from 'antd';
import Head from 'next/head'
import { createFromIconfontCN } from '@ant-design/icons';
import { CloseOutlined, EditOutlined, EllipsisOutlined, SettingOutlined , HeartFilled, MessageFilled, ShareAltOutlined } from '@ant-design/icons';
import { connect } from "react-redux"



const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

const listData = [];
for (let i = 1; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `Username ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: <Rate style={{position:"relative", left: '0px', top: '-20px'}} />,
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    
    });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

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

  <List
    itemLayout="vertical"
    size="large"
    bordered="true"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={ShareAltOutlined} text="99999" key="list-vertical-star-o" />,
          <IconText icon={MessageFilled} text="99999" key="list-vertical-like-o" />,
          <IconText icon={HeartFilled} text="99999" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            style={{position:"relative", left: '0px', top: '50px'}}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
        
      
        
      >

    <Button type="text"   size="small" style={{position:"relative", left: '275px', top: '-175px'}} >
    <Text > + Friend</Text>
    </Button>,
    <List.Item.Meta  style={{position:"relative", left: '0px', top: '-200px'}}
      avatar={<Avatar src={item.avatar} />}
      title= {<a href={item.href}>{item.title}</a>}  
      description={item.description}
      />
      {item.content}
    </List.Item>
    )}
  />,
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
  
 
  

