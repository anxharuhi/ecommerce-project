import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collectionPreview.component';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => {
            return <CollectionPreview key={id} {...otherCollectionProps}/>;
          })
        }
      </div>
    );
  }
}

export default ShopPage;
