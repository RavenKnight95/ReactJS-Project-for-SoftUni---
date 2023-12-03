import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Username: 'username',
    Password: 'password',
    ConfirmPassword: 'confirm-password'
}

const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={onChange}
                        value={values[RegisterFormKeys.Email]}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />
                </div>
                <div>
                    <label>Repeat Password:</label>
                    <input
                        type="password"
                        name="repeat-password"
                        id="repeat-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />
                </div>
                <input className="btn submit" type="submit" value="Register" />

                <p className="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </form>
        </div>
    );
};

export default Register;