import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/home/Home';
import AllBeers from './assets/pages/allbeers/AllBeers';
import RandomBeers from './assets/pages/randombeer/RandomBeers';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllBeers' element={<AllBeers />} />
        <Route path='/RandomBeers' element={<RandomBeers />} />
      </Routes>
    </>
  );
}

export default App;
