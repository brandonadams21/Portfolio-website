import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/blog.png'
              text='Blog coming soon'
              label='WIP'
              path='/blog'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
