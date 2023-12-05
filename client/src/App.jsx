import './App.css'
import React, { Suspense, } from 'react';
import { Route, Routes } from 'react-router';
import { AuthProvider } from './contexts/authContext';

import WelcomePage from './components/welcome-page/WelcomePage';
import CharacterCreate from './components/character-create/CharacterCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/header/Header';
import Arena from './components/arena/Arena';
import Logout from './components/logout/Logout';
import ErrorBoundary from './components/ErrorBoundary';
import Tavern from './components/tavern/Tavern';
import CharacterDetails from './components/character-details/CharacterDetails';


function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/character-create" element={<CharacterCreate />} />
            <Route path="/tavern" element={<Tavern />} />
            <Route path="/characters/:characterId" element={<CharacterDetails />} />

            <Route path="/arena" element={<Arena />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </ErrorBoundary>
  )

}
export default App
