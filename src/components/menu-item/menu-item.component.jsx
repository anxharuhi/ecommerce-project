import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({section, backgroundImage, size}) => {
  return (
    <div className={`${size} menu-item`}>
      <div className='background-image' style={{backgroundImage: `url(${backgroundImage})`}} />
      <div className='content'>
        <h1 className={section}>{section.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem;
