import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter, Route } from 'react-router-dom'

import BottomNav from './Components/BottomNav/bottomNav';
import SignUp from './Components/Sign-up/signUp';
import FirstPage from './Components/FirstPage/firstPage'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path='/' component={FirstPage} />
        <BottomNav />
      </HashRouter>
    </div>
  );
}

export default App;
