import { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Grid, Tag, Row, Col, Layout, Space, List, PageHeader } from 'antd';
import CloseOutlined from '@ant-design/icons';
import Head from 'next/head';
import { connect } from "react-redux"
import { useDispatch } from 'react-redux';
import { setLoginstate } from '../_actions/postsAction';


function Login(props) {

    useEffect(() => {
        window.addEventListener('load', initializeLiff);
    }, []);

    const initializeLiff = () => {
        liff.init({ liffId: '1654691017-Vb7OE34O' });
    };

    return (
        <>
            <Head>
                <title>GoodWork</title>
                <link rel="icon" href="/favicon.ico" />
                <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
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

                <Col flex="auto" style={{ padding: "5%" }}>
                    <Button type="primary" block="true" shape="round" size="large" style={{ color: 'white', backgroundColor: 'gray', padding: "0%", position: "relative", left: '0px', top: '0px' }} onClick={() => { props.setLoginstate() /*liff.login({redirectUri: 'https://beta.vtra.app/redirect'});*/ }}>
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
export default connect(state => state, { setLoginstate })(Login);