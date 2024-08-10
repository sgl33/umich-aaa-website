import React from 'react';
import logo from './logo.svg';
import './App.css';

import LandingView from './Landing/LandingView';
import AboutView from './About/AboutView';
import FurriesView from './Furries/FurriesView';
import JoinView from './Join/JoinView';
import AdminsView from './Admins/AdminsView';
import FAQsView from './FAQs/FAQsView';

function App() {
  return (
    <div className="app">
        <LandingView />
        <AboutView />
        <FurriesView />
        <JoinView />
        <AdminsView />
        <FAQsView />
    </div>
  );
}

export default App;
