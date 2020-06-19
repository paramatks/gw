import { Tabs, Row, Col, Typography, Carousel, Card, Space } from 'antd';
import Head from 'next/head'
import { createFromIconfontCN } from '@ant-design/icons';
import { connect } from "react-redux"
import Posts from '../components/posts';




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


const Gwindex = (props) => {
  console.log(props.appAuthReducer.posts)

  //ReactDOM.render (<Posts />, document.getElementById("root") )

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

        <Tabs defaultActiveKey="1" onChange={callback} >
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
      </div>
    </>
  )
}
export default connect(state => state)(Gwindex);