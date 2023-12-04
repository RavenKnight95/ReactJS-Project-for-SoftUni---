import './App.css'
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';

import WelcomePage from './components/welcome-page/WelcomePage';
import CharacterCreate from './components/character-create/CharacterCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/header/Header';
import Arena from './components/arena/Arena';
import Logout from './components/logout/Logout';


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password)

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate('/')
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate('/')
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }

  return (

    <AuthContext.Provider value={values}>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/character-create" element={<CharacterCreate />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/arena" element={<Arena />} />

      </Routes>

    </AuthContext.Provider>

  )

}
export default App
