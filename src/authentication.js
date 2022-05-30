import React, { Component } from "react";

import PropTypes from "prop-types";
import { Redirect } from "react-router";
import {withOktaAuth} from "@okta/okta-react";

class Authentication extends Component{
    constructor(props) {

    super(props);
this.state={authenticated: null, idTok: null };
    this.checkAuthentication= this.checkAuthentication.bind(this); // this.checkAuthentication()
    this.login= this.login.bind(this);

// this.logout this.logout.bind(this);

}

async checkAuthentication() {
    const authenticated =await this.props.authState.isAuthenticated;

    const t= await this.props.authState.getIdToken;

    if (authenticated != this.state.authenticated) {

        this.setState({ authenticated, idTok: t });

    }
}

componentDidUpdate(){

    if (this.props.authState != null) {
        this.checkAuthentication();

        if (this.state.authenticated || this.state.idTok) {

            this.login();

        }
    }}

async login() {

        // Redirect to '/' after login

        this.props.oktaAuth.signInWithRedirect();
    }
 async logout(){
        this.props.oktaAuth.signOut("/")
    }

    render(){
        if (this.state.authenticated === null) { return <div>this.state.authenticated is null </div> }

        return this.state.authenticated ? (
            <Redirect to={"/dashboard"} />
        ) : (
            <Redirect to={"/errorScreen"} />
        )
    }
}
Authentication.protoTypes = {
    loadUserGroupRequest: PropTypes.func,
};

export default withOktaAuth(Authentication);
