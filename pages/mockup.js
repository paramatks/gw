import { Form, Input, Button, Checkbox, Grid, Tag, Row, Col, Layout, Space } from 'antd';
import CloseOutlined from '@ant-design/icons';
import Head from 'next/head';

const { Header, Footer, Sider, Content } = Layout;
export default function mockup () {
    return (
        <>



    <Row justify= "center">
        <Col >
        <img
              src="/images/mockup.jpg"
        />
        </Col>
    </Row>
   
    
   
       
    
    <Row   justify= "center" align="bottom" style={{width: '100%'}}>
       
        <Col    span={20}>
            <Button type="primary" block="true" shape="round" size="large" style={{ color: 'white' },{backgroundColor:'gray'}} >
                 Continue with LINE
            </Button>
        </Col>
  
        </Row>
       
        <Row   justify= "center" align="bottom" >
       
        <Col>
        Log in means 
        </Col>
   
  
        </Row>

        <Row   justify= "center" align="bottom" >
       
       <Col >
       you have agreed to this
       </Col>
  
 
       </Row>
       <Row   justify= "center" align="bottom" >
       
       <Col style={{ color: 'orange' }}>
       platform agreement
       </Col>
  
 
       </Row>
       
       


    
    </>

    )
}