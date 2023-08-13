import React from 'react'
import AddButton from './AddButton';
import './Card.css'

function Card({data}) {
  const placeholderImage = 'https://publicsectornetwork.com/wp-content/uploads/2020/06/placeholder.jpg';

  

  return (
    <div className='game-card'>
      <div className='card-image' style={{backgroundImage: `url(${data.image}), url(${placeholderImage})`}}></div>
      <div className='card-details'>
        <div className='card-title'>{data.title}</div>
      </div>
      <div className='card-actions'>
        <h2>{`R ${data.price}`}</h2>
        <AddButton/>
    </div>
    </div>
  )
}

export default Card
