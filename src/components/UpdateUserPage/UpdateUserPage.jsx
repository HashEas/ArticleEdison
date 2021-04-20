import React, { useState } from 'react';
const UpdateUserPage = (props) => {

    const [registrationUser, setRegistrationUser] = useState({
        email:"",
        password:""
    });

    const onChangeHandler = (event, key) => {
        setRegistrationUser({
            ...registrationUser,
            [key]: event.target.value
        });
    }

    const postSignUpRequest = (e) => {
        e.preventDefault();
        alert("Ajax call to SignUP");
    }

    return (
        <section className="d-flex text-center home_page_section">
            <div className="container justify-content-center">
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
                                <p className="label-txt">First Name</p>
                                <input type="text" required className="input" onChange={(e) => onChangeHandler(e, "firstName")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Last Name</p>
                                <input type="text" required className="input" onChange={(e) => onChangeHandler(e, "lastName")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Phone</p>
                                <input type="number" required className="input" onChange={(e) => onChangeHandler(e, "phone")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Email</p>
                                <input type="email" required className="input" onChange={(e) => onChangeHandler(e, "email")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">DOB</p>
                                <input type="date" required className="input" onChange={(e) => onChangeHandler(e, "dob")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Password</p>
                                <input type="password" required className="input" onChange={(e) => onChangeHandler(e, "password")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Confirm Password</p>
                                <input type="password" required className="input" onChange={(e) => onChangeHandler(e, "password")}/>
                                <div className="line-box"><div className="line"></div></div>
                            </label>
                            <label>
                                <p className="label-txt">Article preferences</p>
                                <input type="text" className="input" />
                                <div className="line-box"><div className="line"></div></div>
                                <div className="d-flex">
                                    <div className="category">Art</div>
                                    <div className="category">Entertainment</div>
                                </div>
                            </label>
                            <button className="btn rounded-0 launch_btn btn-dark" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpdateUserPage;
