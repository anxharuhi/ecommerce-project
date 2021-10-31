import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class DirectoryMenu extends React.Component {
  constructor(){
    super();
    this.state ={
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          routeUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          routeUrl: 'jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          routeUrl: 'sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          routeUrl: 'womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          routeUrl: 'mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map( ({ id, ...otherSectionDetails }, i) => {
          return <MenuItem key={id} { ...otherSectionDetails }/>
        })}
      </div>
    )
  }
}
export default DirectoryMenu;
