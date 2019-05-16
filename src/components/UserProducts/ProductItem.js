import React from 'react';

import defProduct from 'assets/img/default.jpg';
import CSSModules from 'react-css-modules';
import styles from './UserProducts.module.scss';

function ProductItem(props) {
  const { item } = props;
  const { pk } = item;
  return (
    <li styleName='product'>
      <div>
        <img
          styleName='product-image'
          src={item.images.length ? item.images[0] : defProduct}
          alt='Product img'
        />
      </div>
      <div styleName='product-info'>
        <ul>
          <li styleName='product-title'>{item.theme}</li>
          <li />
          <li />
        </ul>
      </div>
      <button
        onClick={() => props.deleteProduct(pk)}
        styleName='product-delete'
      >
        Delete
      </button>
    </li>
  );
}

export default CSSModules(ProductItem, styles);
