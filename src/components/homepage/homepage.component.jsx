import React from 'react';
import MenuItem from '../menuitem/menuitem.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <MenuItem section={'hats'}/>
        <MenuItem section={'jackets'}/>
        <MenuItem section={'sneakers'}/>
        <MenuItem section={'womens'}/>
        <MenuItem section={'mens'}/>
      </div>
    </div>
  );
}

export default HomePage;
