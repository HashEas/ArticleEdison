import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage/HomePage';
import LoginPage from '../components/LoginPage/LoginPage';
import RegistrationPage from '../components/RegistrationPage/RegistrationPage';

class AuthContainer extends React.Component{


    authenticatedContainer = () => {
        return (
        <Switch>
            <Route path="/" render={() => <div>Authentiacted</div>} />
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