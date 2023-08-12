import React from 'react'
import './GameCard.css'

function GameCard({game}) {
  const placeholderImage = 'https://publicsectornetwork.com/wp-content/uploads/2020/06/placeholder.jpg';

  return (
    <div className='game-card'>
      <div className='card-image' style={{backgroundImage: `url(${game.background_image}), url(${placeholderImage})`}}></div>
      <div className='card-details'>
        <div className='card-title'>{game.name}</div>
      </div>
      <div className='card-actions'>
        <h2>R400.06</h2>
    </div>
    </div>
  )
}

export default GameCard
