import React, { Component} from 'react';
import { Tabs, Row, Col, Button, Carousel, Avatar, Rate, List, Typography, Card, Space  } from 'antd';
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

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function callback(key) {
  console.log(key);
}


function Posts(props)  {
    return (
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
            dataSource={props.postlist}
           
            renderItem={item => {
              console.log('item color: ', item.type)
              return (
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
                <div 
                  style={
                    //if type == 1 then we render 999, else then we render orange
                    (item.type == 1) ? {backgroundColor: '#999'} : {backgroundColor: 'orange'} 
                    
                  }
                >
                 <Rate style={{position:"relative", left: '100px', top:'-175px'}} />

                  <Button type="text"   size="small" style={{position:"relative", left: '275px', top: '-175px'}} >
                  <Text > + Friend</Text>
                  </Button>,
                  <List.Item.Meta  style={{position:"relative", left: '0px', top: '-200px'}}
                    avatar={<Avatar src={item.avatar} />}
                    title= {<a href={item.href}>{item.title}</a>}  
                    description={item.description}
                    
                    />
                    {item.content}
                </div>
              </List.Item>
            )}}
          />
    
    )
  }
  

export default Posts;
