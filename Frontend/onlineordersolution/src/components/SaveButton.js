import React from 'react'
import './SaveButton.css'
import * as FaIcons from 'react-icons/fa'

function SaveButton({onClick}) {
  return (
    <div className='save-box'>
      <button onClick={onClick} className='save-btn'>
        <FaIcons.FaPlus/>
         Save
      </button>
    </div>
  )
}

export default SaveButton
