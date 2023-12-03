import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // You can add your login logic here
        // For simplicity, let's just log the entered username and password
        console.log('Username:', username);
        console.log('Password:', password);

        // You can integrate authentication logic here (e.g., API call, authentication service)
        
        alert('Login logic will be implemented here.');
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;