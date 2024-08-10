import React from 'react';
import logo from './logo.svg';
import './App.css';

import LandingView from './Landing/LandingView';
import AboutView from './About/AboutView';

function App() {
  return (
    <div className="app">
        <LandingView />
        <AboutView />
        <LandingView />
    </div>
  );
}

export default App;
