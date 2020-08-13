import React, { PropTypes } from 'react';
import SpinComponent from './SpinComponent';
import Router from 'next/router';

const authWrapper = ComposedComponent => class WrapComponent extends React.Component {

    componentDidMount() {
        this.checkAndRedirect();
    }

    componentDidUpdate() {

    }

    checkAndRedirect() {
        const { isAuthenticated } = this.props.appAuthReducer;

        if (!isAuthenticated) {
            Router.push('/login');
        }
    }

    render() {
        return (
            <div>
                {this.props.appAuthReducer.isAuthenticated ? <ComposedComponent {...this.props} /> : <SpinComponent />}
            </div>
        );
    }
}

export default authWrapper