import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/blog.png'
              text='Blog coming soon'
              label='WIP'
              path='/blog'
            />
              <CardItem
              src='images/Skills.jpeg'
              text='Skills'
              label='WIP'
              path='/skills'
            />
              <CardItem
              src='images/Education.png'
              text='Education'
              label='WIP'
              path='/education'
            />
              <CardItem
              src='images/Resume.png'
              text='Resume'
              label='WIP'
              path='/resume'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
