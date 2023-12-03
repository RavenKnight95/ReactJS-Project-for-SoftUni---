import React from 'react';
import './App.css'
import WelcomePage from './components/welcome-page/WelcomePage';
import CharacterCreate from './components/character-create/CharacterCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/header/Header';
import Arena from './components/arena/Arena';
import { AuthProvider } from './contexts/AuthContext';
import { CharacterProvider } from './contexts/CharacterContext';
import { Route, Routes } from 'react-router';

function App() {
  WelcomePage
  return (
    <>
      <AuthProvider>
        <CharacterProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/character-create" element={<CharacterCreate />} />
            <Route path="/arena" element={<Arena />} />
          </Routes>
        </CharacterProvider>
      </AuthProvider>
    </>
  )

}
export default App
