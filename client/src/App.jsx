import React from 'react';
import './App.css'
import WelcomePage from './components/welcome-page/WelcomePage';
import CharacterCreate from './components/character-create/CharacterCreate';
import Login from './components/login/Login';

function App() {

  return (
    <>
      <WelcomePage />
      <CharacterCreate />
      <Login />
    </>
  )

}
export default App
