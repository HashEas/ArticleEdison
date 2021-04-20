import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionTypes from '../../store/action/errorActions';

const LoginPage = (props) => {

    const [loginUser, setLoginUser] = useState({
        email:"",
        password:""
    });

    const onChangeHandler = (event, key) => {
        setLoginUser({
            ...loginUser,
            [key]: event.target.value
        });
    }

    const postSignInRequest = (e) => {
        e.preventDefault();
        const signInUserInfo = {
            email: loginUser.email,
            password: loginUser.password,
            returnSecureToken: true
        }
        axios.post( 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwQlLyIkSEZltbCjxfxxfDp6DMp06B3Sg',signInUserInfo)
        .then( response => {
            console.log( response.data );
            alert("to do authenticated user" + response.data.idToken);
        })
        .catch( error => {
            props.dispatchShowError("Sorry SignIn Failed");
        });
    }


  
    return (
        <section className="d-flex text-center home_page_section">
            <div className="container d-flex justify-content-center">
                <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-6 col-xl-4">
                            <div className="d-flex flex-wrap justify-content-end p-3 text-white">
                                <p className="title">Article Edisons</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <form onSubmit={(e) => postSignInRequest(e)} className="login_form">
                                <label className="subtitle m-3">Sign In Form</label>
                                <label>
                                    <p className="label-txt">Email</p>
                                    <input type="email" required className="input" onChange={(e) => onChangeHandler(e, "email")} />
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p className="label-txt">Password</p>
                                    <input type="password" required className="input" onChange={(e) => onChangeHandler(e, "password")} />
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                </label>
                                <button className="btn rounded-0 launch_btn btn-dark" type="submit">Sign In</button>
                                <Link 
                                    to="/registration"
                                    className="btn rounded-0 launch_btn btn-secondary float-left">Sign Up Instead</Link>
                            </form>    
                        </div>
                </div>    
            </div>
        </section>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowError: (error) => dispatch({ type: actionTypes.SHOW_ERROR, error: error }),
        dispatchHideError: (error) => dispatch({ type: actionTypes.HIDE_ERROR})
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);