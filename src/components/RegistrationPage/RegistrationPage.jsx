import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action/errorActions';
import axios from 'axios';

const RegistrationPage = (props) => {

    const [registrationUser, setRegistrationUser] = useState({
        email:"",
        password:"",
        confirmpassword:""
    });

    const onChangeHandler = (event, key) => {
        setRegistrationUser({
            ...registrationUser,
            [key]: event.target.value
        });
    }

    const postSignUpRequest = (e) => {
        e.preventDefault();
        props.dispatchHideError();
        if(registrationUser.password === registrationUser.confirmpassword){
            const signUpUserInfo = {
                email: registrationUser.email,
                password: registrationUser.password,
                returnSecureToken: true
            }
            axios.post( 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwQlLyIkSEZltbCjxfxxfDp6DMp06B3Sg',signUpUserInfo)
            .then( response => {
                console.log( response.data );
                alert("to do authenticated user" + response.data.idToken);
            })
            .catch( error => {
                props.dispatchShowError("Sorry Signup Failed");
            });
        }
        else{
            props.dispatchShowError("Please fill form correctly.");
        }        
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
                        <form onSubmit={(e) => postSignUpRequest(e)} className="registration_form">
                            <label className="subtitle m-3">Registration Form</label>
                            <label>
                                <p className="label-txt">Email</p>
                                <input type="email" required className="input" onChange={(e) => onChangeHandler(e, "email")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Password</p>
                                <input type="password" required className="input" onChange={(e) => onChangeHandler(e, "password")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Confirm Password</p>
                                <input type="password" required className="input" onChange={(e) => onChangeHandler(e, "confirmpassword")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <button className="btn rounded-0 launch_btn btn-dark" type="submit">Register</button>
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

export default connect(null, mapDispatchToProps)(RegistrationPage);
