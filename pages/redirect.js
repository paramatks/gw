import {useEffect} from 'react'
import { Form, Input, Button, Checkbox, Grid, Tag, Row, Col, Layout, Space, List, PageHeader } from 'antd'
import CloseOutlined from '@ant-design/icons'
import Head from 'next/head';
import { connect } from "react-redux"
import Router from 'next/router'
import { useDispatch } from 'react-redux'
import {setLoginstate} from '../_actions/postsAction'
import SpinComponent from '../components/general/SpinComponent'
import {getCookieFromBrowser} from '../lib/general'


function Redirect(props) {

    useEffect(() =>{
        var url = getCookieFromBrowser('redirect_path');
        Router.push(url);
    }, []);

    return (<SpinComponent />)
}
export default connect(state => state,{setLoginstate})(Redirect);