import React, { Component } from 'react';
import { Tabs, Row, Col, Button, Avatar, Rate, List, Typography, Card, Space, } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { HeartFilled, MessageFilled, ShareAltOutlined, MoreOutlined, EnvironmentFilled } from '@ant-design/icons';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const { Text, Title } = Typography;
const { Meta } = Card;
const { TabPane } = Tabs;

const IconText = ({ icon, text }) => (
  <Space style={{ position: "relative", left: "25px", top: "-5px" }} size="middle" >
    {React.createElement(icon)}
    {text}
  </Space>
);

function callback(key) {
  console.log(key);
}



function Posts(props) {
  return (
    <List style={{ position: "relative", left: '0px', top: '-20px' }}
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
          //extra={
          //<img
          //src= {item.images}                                  
          //width={272}
          //style={{position:"relative", left: '0px', top: '50px'}}
          //alt="logo"
          //src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          ///>
          //} 


          >
            <div
              style={
                //if type == 1 then we render 999, else then we render orange
                (item.type == 1) ? { backgroundColor: '#999' } : { backgroundColor: 'orange' }

              }
            >
              <Rate style={{ position: "relative", left: '55px', top: '30px' }} />

              <Button type="text" size="small" style={{ position: "relative", left: '75px', top: '3px' }} >
                <Text > + Friend</Text>
              </Button>,
              <Button type="text" size="small" style={{ position: "relative", left: '65px', top: '3px' }} >
                <Text > + Follow</Text>
              </Button>
              <Button type="link" style={{ position: "relative", left: '55px', top: '5px' }} icon={<MoreOutlined style={{ color: 'gray' }} />} />


              <List.Item.Meta style={{ position: "relative", left: '10px', top: '-25px' }}
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
              //description={item.description}

              />
              <List style={{ position: "relative", left: '25px', top: '-15px' }} >
                {item.content}


              </List>


              <List
                grid={{
                  column: 4,
                  gutter: 100

                }}
                style={{ position: "relative", left: '-10px', top: '-10px' }}

                dataSource={item.images}
                renderItem={imageItem => (
                  <List.Item>




                    <img
                      src={imageItem.uri}
                      width={100}
                      style={{ position: "relative", left: '0px', top: '0px' }}
                      alt="logo"
                    />

                  </List.Item>


                )}
              />
              <List style={{ position: "relative", left: '15px', top: '-5px' }} >
                <EnvironmentFilled />
                <text style={{ position: "relative", left: '10px', top: '0px' }}>
                  {item.location}


                </text>



              </List>


              <List style={{ position: "relative", left: '240px', top: '-27px' }} >

                <text style={{ position: "relative", left: '0px', top: '0px' }}>
                  {item.date}


                </text>



              </List>

            </div>
          </List.Item>
        )
      }}
    />

  )
}


export default Posts;
