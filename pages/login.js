import { Form, Input, Button, Checkbox, Grid, Tag, Row, Col, Layout, Space, List, PageHeader } from 'antd';
import CloseOutlined from '@ant-design/icons';
import Head from 'next/head';
import { connect } from "react-redux"
import { useDispatch } from 'react-redux';
import {setLoginstate} from '../_actions/postsAction';


function Login(props) {
    return (
        <>
            <Head>
                <title>We Work</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageHeader //style={{ backgroundColor: "gray" }}

                onBack={() => window.history.back()}

                title="Login"
            />




            <Row justify="center" >
                <Col style={{ position: "relative", left: "-65px", top: "auto" }} >



                    <img
                        src="/images/login.jpg"
                        style={{ position: "relative", objectFit: 'cover' }}
                    />



                </Col>
            </Row>







            <Row justify="center" align="bottom" /*style={{ width: '100%' }}*/>

                <Col flex="auto">
                    <Button type="primary" block="true" shape="round" size="large" style={{ color: 'white' }, { backgroundColor: 'gray' }, { position: "relative", left: '0px', top: '0px' }}  onClick={() => { props.setLoginstate() }}>
                        Continue with LINE
            </Button>
                </Col>

            </Row>

            <Row justify="center" align="bottom" style={{ position: "relative", left: '0px', top: '0px' }}>

                <Col >
                    Log in means
        </Col>


            </Row>

            <Row justify="center" align="bottom" style={{ position: "relative", left: '0px', top: '0px' }}>

                <Col >
                    you have agreed to this
       </Col>


            </Row>
            <Row justify="center" align="bottom" style={{ position: "relative", left: '0px', top: '0px' }}>

                <Col style={{ color: 'orange' }}>
                    platform agreement
       </Col>


            </Row>





        </>

    )
}
export default connect(state => state,{setLoginstate})(Login);