import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CovidList from './components/CovidList';
import DetailPage from './components/DetailPage';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CovidList />} />
        <Route path="/covidDetails/:countryName" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
