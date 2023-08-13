import React, { useState } from 'react';
import './EditCard.css';
import SaveButton from './SaveButton';

function EditCard({ game }) {
  const placeholderImage =
    'https://publicsectornetwork.com/wp-content/uploads/2020/06/placeholder.jpg';
  const [price, setPrice] = useState(400.0);
  const [placeHolderTitle, setPlaceHolderTitle] = useState(game.name);
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const decreasePrice = () => {
    setPrice((prevPrice) => prevPrice - 1);
  };

  const increasePrice = () => {
    setPrice((prevPrice) => prevPrice + 1);
  };

  const handleChange = () => {
    if(title === '') return;
    
    setPlaceHolderTitle(title);
    setTitle('');
    console.log(placeHolderTitle, title)
  };

  // style={{backgroundImage: `url(${game.background_image}), url(${placeholderImage})`}}
  return (
    <div className='edit-card'>
      <div
        className='edit-card-image'
        style={{
          backgroundImage: `url(${placeholderImage})`,
        }}
      ></div>
      <div className='edit-card-details'>
        <input
          type='text'
          className='edit-card-title'
          placeholder={placeHolderTitle}
          onChange={handleTitleChange}
          value={title}
        ></input>
      </div>
      <div className='edit-card-actions'>
        <div>
        <button className='toggle-button' onMouseDown={increasePrice} >-</button>
        <input
          type='text'
          className='price-input'
          placeholder={`R${price}.00`}
        />
        <button  className='toggle-button' onMouseDown={increasePrice} >+</button>
        </div>
        <SaveButton onClick={handleChange}/>
      </div>
    </div>
  );
}

export default EditCard;
