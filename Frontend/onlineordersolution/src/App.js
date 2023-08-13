// App.js
import React, { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  const  [authenticated, setauthenticated] = useState(localStorage.getItem('authenticated') || false);
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('authenticated');
    console.log(window.location.pathname,userLoggedIn);
    if(userLoggedIn){
      setauthenticated(userLoggedIn);
    }
  }, []);

  if(!authenticated){
    return <Navigate replace to='/login'/>;
  }
  else{
    return (
      <div className='App'>
        <SkeletonTheme baseColor='#D3D3D3' highlightColor='#ECECEC'>
          <SideBar />
          <Main/>
        </SkeletonTheme>
      </div>
    );
  }
  
}

export default App;
