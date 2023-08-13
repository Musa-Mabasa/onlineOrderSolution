import React from 'react'
import './SaveButton.css'
import * as FaIcons from 'react-icons/fa'

function AddButton({onClick}) {
  return (
    <div className='save-box'>
      <button onClick={onClick} className='save-btn'>
        <FaIcons.FaPlus/>
         Add
      </button>
    </div>
  )
}

export default AddButton
