import React from 'react'
import './Searchbar.css'
import * as AiIcons from 'react-icons/ai';


function Searchbar({placeholder, data}) {
  return (
    <div className='searchbar'>
      <div className='searchInput'>
        <input type='text' placeholder={placeholder}/>
        <button><AiIcons.AiOutlineSearch/></button>
      </div>
      {/* <div className='dataresult'></div> */}
    </div>
  )
}

export default Searchbar
