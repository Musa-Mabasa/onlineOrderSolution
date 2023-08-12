import React from 'react'
import './Header.css';
import Searchbar from '../components/Searchbar'


function Header() {

    const isSlideshow = window.location.pathname === '/pictures';

  return (
    <div>
      {
        !isSlideshow && (
          <div className='header'>
          {/* <div className='welcome'>Shopping solution</div> */}
          <div className='search-bar'>
            <Searchbar placeholder='Search'/>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Header
