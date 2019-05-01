import React from 'react';
import styles from './ProductItem.module.scss';
import CSSModules from 'react-css-modules';

function ProductItem(props) {
  const { theme, images } = props.item;

  return (
    <div styleName='product'>
      <div styleName='image-wrapper'>
        <img
          styleName='image'
          src={images.length ? images[0].file : 'img/default.jpg'}
          alt='Product'
        />
      </div>
      <div styleName='info'>
        <span styleName='title'>{theme ? theme : 'Product Title'}</span>
        <span>
          <img src='img/icons/fa-eye.png' alt='Eye' />
        </span>
      </div>
    </div>
  );
}

export default CSSModules(ProductItem, styles);
