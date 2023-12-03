import React from 'react';
import './App.css'
import WelcomePage from './components/welcome-page/WelcomePage';
import CharacterCreate from './components/character-create/CharacterCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/header/Header';
import Arena from './components/arena/Arena';

function App() {

  return (
    <>
      <WelcomePage />
      <Header />
      <Register />
      <Login />
      <CharacterCreate />
      <Arena />
      
    </>
  )

}
export default App
