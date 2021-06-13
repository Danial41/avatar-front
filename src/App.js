import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter, Route } from 'react-router-dom'

import BottomNav from './Components/BottomNav/bottomNav';
import SignUp from './Components/Sign-up/signUp';
import FirstPage from './Components/FirstPage/firstPage';
import ProfilePage from './Pages/ProfilePage/profilePage';
import ServicesPage from './Pages/ServicesPage/servicesPage';
import MessagesPage from './Pages/MessagesPage/messagesPage';
import HomePage from './Pages/HomePage/homePage';
import FacesPage from './Pages/FacesPage/facesPage';
import projectCreation from './Pages/ProjectCreation/projectCreation';
import ProjectsPage from './Pages/ProjectsPage/projectsPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/profile/:id' component={ProfilePage} />
        <Route exact path={['/profile/:id', '/services', '/messages', '/homepage', '/facespage']} component={BottomNav} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/messages' component={MessagesPage} />
        <Route exact path='/homepage' component={HomePage} />
        <Route exact path='/facespage' component={FacesPage} />
        <Route exact path='/project' component={projectCreation} />
        <Route exact path='/projects' component={ProjectsPage} />
        {/* <BottomNav /> */}
      </HashRouter>
    </div>
  );
}

export default App;
