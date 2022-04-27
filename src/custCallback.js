import React, { Component } from 'react';
import { OktaAuth } from '@okta/okta-auth-js';
import config from './config';
var authClient = new OktaAuth(config.oidc);

class custCallback extends Component {
    constructor(props){
        super(props);
        this.parseUrl = this.parseUrl.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
    }
    componentDidMount(){
        this.parseUrl(authClient);
    }
    isEmpty(value){
        return !value;
    }
    parseUrl(authClient1){
        authClient1.token.parseFromUrl().then(function(res) {
            authClient1.tokenManager.add('accessToken', res.tokens.accessToken);
            authClient1.tokenManager.add('idToken', res.tokens.idToken);
            window.location.assign('/dashboard');
        })
        .catch(function(err) {
            console.log('error',err);
        })
    }
    render(){
        return (
            <div>
                <h2>Logging you in...</h2>
                <div className='loading'></div>
            </div>
        )
    }
}

export default custCallback;