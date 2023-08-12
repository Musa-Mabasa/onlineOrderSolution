import React from 'react'
import { Outlet } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './Header'
import Home from '../pages/Home'
import NewReleases from '../pages/NewReleases'


function Main() {
  return (
    <div className='main'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Main
