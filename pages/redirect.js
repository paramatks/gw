import { useEffect } from 'react';
import { Form, Input, Button, Checkbox, Grid, Tag, Row, Col, Layout, Space, List, PageHeader } from 'antd';
import CloseOutlined from '@ant-design/icons';
import Head from 'next/head';
import { connect } from "react-redux"
import { useDispatch } from 'react-redux';
import { setLoginstate } from '../_actions/postsAction';
import SpinComponent from '../components/general/SpinComponent'
import Router from 'next/router';


function Redirect(props) {
    useEffect(() => {
        //window.addEventListener('load', initializeLiff);
        liff.init({ liffId: '1654691017-Vb7OE34O' })
        .then(() => {
            console.log("Line logged in", liff.isLoggedIn());
            if (liff.isLoggedIn()) {
                props.setLoginstate();
            } else {
                Router.push('/login');
            }
        })
    }, []);

    const initializeLiff = () => {
        liff.init({ liffId: '1654691017-Vb7OE34O' })
        .then(() => {
            console.log("Line logged in", liff.isLoggedIn());
            if (liff.isLoggedIn()) {
                props.setLoginstate();
            } else {
                Router.push('/login');
            }
        })
    };

    return (
        <>
            <Head>
                <title>GoodWork Redirect</title>
                <link rel="icon" href="/favicon.ico" />
                <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
            </Head>
            <SpinComponent />
        </>)

}
export default connect(state => state, { setLoginstate })(Redirect);