import { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Grid, Tag, Row, Col, Layout, Space, List, PageHeader, Typography } from 'antd';
import CloseOutlined from '@ant-design/icons';
import Head from 'next/head';
import { connect } from "react-redux"
import { useDispatch } from 'react-redux';
import { setLoginstate } from '../_actions/postsAction';

const { Text, Title } = Typography;

function Login(props) {

    //useEffect(() => {
    // window.addEventListener('load', initializeLiff);
    //   }, []);

    //const initializeLiff = () => {
    //liff.init({ liffId: '1654691017-Vb7OE34O' });
    //};

    return (
        <>
            <Head>
                <title>GoodWork</title>
                <link rel="icon" href="/favicon.ico" />
                {/*  <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>*/}
            </Head>

            <PageHeader //style={{ backgroundColor: "gray" }}
                onBack={() => window.history.back()}
                title="Login"
            />

            <Row justify="center">
                <Col span="24" style={{ marginRight: 125 }}>
                    <img
                        src="/images/login.jpg"
                    />
                </Col>
            </Row>

            <Row justify="center" align="bottom">
                <Col span="20" >
                    <Button type="primary" block="true" shape="round" size="large" style={{ backgroundColor: 'gray' }} onClick={() => { props.setLoginstate() /*liff.login({redirectUri: 'https://beta.vtra.app/redirect'});*/ }}>
                        <Text>
                            Continue with LINE
                       </Text>
                    </Button>
                </Col>
            </Row>
            <Row justify="center" align="bottom" >
                <Col span="10" style={{marginLeft:75, marginTop:25}}>
                    Log in means
                </Col>
            </Row>

            <Row justify="center" align="bottom" >
                <Col span="10" style={{marginLeft:10}}>
                    you have agreed to this
                </Col>
            </Row>

            <Row justify="center" align="bottom">
                <Col span="10" style={{ color: 'orange',marginLeft:35, marginBottom:40 }}>
                    platform agreement
                </Col>
            </Row>

        </>
    )
}
export default connect(state => state, { setLoginstate })(Login);