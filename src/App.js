import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter } from 'react-router-dom'

import BottomNav from './Components/BottomNav/bottomNav';
import SignUp from './Components/Sign-up/signUp';
import FirstPage from './Components/FirstPage/firstPage'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <SignUp />
        <FirstPage />
        <BottomNav />
      </HashRouter>
    </div>
  );
}

export default App;
