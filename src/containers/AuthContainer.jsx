import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage/HomePage';
import LoginPage from '../components/LoginPage/LoginPage';
import RegistrationPage from '../components/RegistrationPage/RegistrationPage';
import DashboardContainer from './DashboardContainer';
import ArticleDetailsContainer from './ArticleDetailsContainer';

class AuthContainer extends React.Component{

    authenticatedContainer = () => {
        return (
        <Switch>
            <Route path="/detail" exact component={ArticleDetailsContainer} />
            <Route path="/" exact component={DashboardContainer} />
            <Redirect to="/" />
        </Switch>
        );
    }

    nonAuthenticatedContainer = () => {
        return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Redirect to="/" />
        </Switch>
        );
    }
    
    render(){
        return this.props.authenticated ? this.authenticatedContainer() : this.nonAuthenticatedContainer();
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.authState.authenticated
    };
}
  
export default connect(mapStateToProps, null)(AuthContainer);