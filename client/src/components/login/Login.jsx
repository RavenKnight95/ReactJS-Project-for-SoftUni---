import React, { useContext, useState } from 'react';
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

const LoginFormKeys = {
    Username: 'username',
    Password: 'password',
}

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Username]: '',
        [LoginFormKeys.Password]: '',
    });
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name={LoginFormKeys.Username}
                        onChange={onChange}
                        value={values[LoginFormKeys.Username]}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name={LoginFormKeys.Password}
                        onChange={onChange}
                        value={values[LoginFormKeys.Password]}
                    />
                </div>
                <input type="submit" className="btn submit" value="Login" />
                <p className="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </form>
        </div>
    );
};




export default Login;