import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CovidList from './components/CovidList';
import CovidDetails from './components/CovidDetails';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<CovidList />} />
          <Route path="/covidDetails/:key" element={<CovidDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
