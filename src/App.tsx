import React from 'react';
import logo from './logo.svg';
import './App.css';

import LandingView from './Landing/LandingView';
import AboutView from './About/AboutView';
import { Route, Routes } from 'react-router';
import Stickerboard from './Stickerboard/Stickerboard';
import FurriesView from './Furries/FurriesView';
import JoinView from './Join/JoinView';
import AdminsView from './Admins/AdminsView';
import FAQsView from './FAQs/FAQsView';

function App() {
  return (
    <Routes>
        <Route path='/home' element={
          <div className="app">
              <LandingView />
              <AboutView />
              <FurriesView />
              <JoinView />
              <AdminsView />
              <FAQsView />
          </div>
        }>
        </Route>
        <Route path='/' element={
          <div className="app">
              <LandingView />
              <AboutView />
              <FurriesView />
              <JoinView />
              <AdminsView />
              <FAQsView />
          </div>
        }>
        </Route>
        <Route path='/stickerboard' element={
          <>
            <Stickerboard />
          </>
        }>
        </Route>
    </Routes>
  );
}

export default App;
