import React from 'react';
import './menuitem.styles.scss';

const MenuItem = ({section}) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <h1 className='hats'>{section.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem;
