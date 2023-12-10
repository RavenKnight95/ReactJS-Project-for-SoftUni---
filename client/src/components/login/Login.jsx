import React, { useContext, useEffect, useState } from 'react';
import useForm from "../../hooks/useForm";
import AuthContext from '../../contexts/authContext';
import { Link } from "react-router-dom";

import './Login.css'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}
export default function Login() {

    useEffect(() => { document.body.style.backgroundImage = `url(${'https://i.imgur.com/ktqRaJo.jpg'})` });
    
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });
    return (
        <div className="login-container">
            <div className='login-form'>
                <h2 className='login-title'>Login</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <label className='login-label'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name={LoginFormKeys.Email}
                            placeholder='raven@mail.bg'
                            onChange={onChange}
                            value={values[LoginFormKeys.Email]}
                        />
                    </div>
                    <div>
                        <label className='login-label'>Password:</label>
                        <input
                            type="password"
                            id="login-password"
                            name={LoginFormKeys.Password}
                            onChange={onChange}
                            value={values[LoginFormKeys.Password]}
                        />
                    </div>
                    <input type="submit" className="btn-submit" value="Login" />
                    <p className="field">
                        <span className='login-span'>If you don't have profile click <Link to={`/register`} className="login-a">here</Link></span>

                    </p>
                </form>
            </div>
        </div >
    );
};
