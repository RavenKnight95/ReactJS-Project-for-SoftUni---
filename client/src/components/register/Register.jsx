import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

import './Register.css'

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirmPassword'
}

export default function Register() {

    useEffect(() => { document.body.style.backgroundImage = `url(${'https://cdna.artstation.com/p/assets/images/images/030/214/624/large/spas-dimitrov-dpimv4b.jpg?1599940598'})` });


    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <div className="register-container">
            <div className='register-form'>
                <h2 className='register-title'>Register</h2>
                <form onSubmit={onSubmit}>
                    <div className="register-container-form">
                        <label className='register-label'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="raven@mail.com"
                            required="Email is required"
                            onChange={onChange}
                            value={values[RegisterFormKeys.Email]}
                        />
                    </div>
                    <div className="register-container-form">
                        <label className='register-label'>Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="register-password"
                            onChange={onChange}
                            values={values[RegisterFormKeys.Password]}
                        />
                    </div>
                    <div className="register-container-form">
                        <label className='register-label'>Repeat Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            onChange={onChange}
                            values={values[RegisterFormKeys.ConfirmPassword]}
                        />
                    </div>
                    <input className="btn-submit" type="submit" value="Register" />

                    <p className="field">
                        <span className='register-span'>If you already have profile click <Link to={`/login`} className="register-a">here</Link></span>
                    </p>
                </form>
            </div>
        </div>
    );
};
