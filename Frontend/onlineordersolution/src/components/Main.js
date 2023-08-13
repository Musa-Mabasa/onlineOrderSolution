// Main.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import ConfigureProducts from '../pages/ConfigureProducts';

function Main() {
  return (
    <div className='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products' element={<ConfigureProducts />} />
      </Routes>
    </div>
  );
}

export default Main;
