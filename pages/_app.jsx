import '../styles/global.css'
import {Provider} from 'react-redux'
import React from 'react'
import App from 'next/app'
import { wrapper } from "../_store/goodWorkStore"

import { getState } from '../_actions/appAuthAction'
import { setCookie, getCookie} from '../lib/general/cookieOps'

class MyApp extends App {

    
    static getInitialProps = async ({Component, ctx}) => {
        await ctx.store.dispatch(getState(ctx.req));

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                // Some custom thing for all pages
                pathname: ctx.pathname,
                query: ctx.query,
                fullPath: ctx.asPath,
                token: getCookie('token', ctx.req),
                cInfo: getCookie('cInfo', ctx.req)
            },
        };
    }
    

    render() {
        const {Component, pageProps} = this.props;

        return (  
            <Component {...pageProps}/>
        );
    }

}

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);