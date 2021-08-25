import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import FeedbackComponents from './components/FeedbackComponets';
import Header from './components/Header';
import Routes from './Routes'



function App() {


  return (
    <BrowserRouter>

      <div className="page">

        <Header />
        <div>
          <Routes></Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

