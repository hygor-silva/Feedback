import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Routes from './Routes'




function App() {


  return (
    <BrowserRouter>

      <div>

        <Header />
        <div>
          <Routes></Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

