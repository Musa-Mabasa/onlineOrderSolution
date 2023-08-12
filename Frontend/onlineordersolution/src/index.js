import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './pages/Home';
import NewReleases from './pages/NewReleases';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main/>}>
          <Route path='/shop' element={<Home/>}/>
          <Route path='/orders' element={<NewReleases/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
