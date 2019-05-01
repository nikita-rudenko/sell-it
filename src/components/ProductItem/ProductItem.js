import React from 'react';
import styles from './ProductItem.module.scss';
import CSSModules from 'react-css-modules';

function ProductItem(props) {
  const { theme, images } = props.item;

  const image = images.length ? images[0].file : 'img/default.jpg';
  const title = theme ? theme : 'Product Title';

  return (
    <div styleName='product'>
      <div styleName='image-wrapper'>
        <img styleName='image' src={image} alt='Product' />
      </div>
      <div styleName='info'>
        <span styleName='title'>{title}</span>
        <span>
          <img src='img/icons/fa-eye.png' alt='Eye' />
        </span>
      </div>
    </div>
  );
}

export default CSSModules(ProductItem, styles);
