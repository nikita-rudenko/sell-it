import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './UserProducts.module.scss';
import defProduct from 'assets/img/default.jpg';

function ProductItem(props) {
  const { item } = props;
  const { pk, theme } = item;
  const image = item.images.length ? item.images[0] : defProduct;

  return (
    <li styleName='product'>
      <div>
        <img styleName='product-image' src={image} alt='Product img' />
      </div>
      <div styleName='product-info'>
        <ul>
          <li styleName='product-title'>{theme}</li>
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
