import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cardText' id='projects' style={{color: 'rgb(81, 193, 241)', paddingTop: '75px'}}>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/BlogPreview.png'
              text='Blog Project'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
