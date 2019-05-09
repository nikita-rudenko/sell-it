import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';
import CSSModules from 'react-css-modules';
import defaultImg from 'assets/img/default.jpg';
import eye from 'assets/img/icons/fa-eye.png';

const ProductItem = props => {
  const { theme, images, pk } = props.item;

  const image = images.length ? images[0].file : defaultImg;
  const title = theme ? theme : 'Product Title';

  return (
    <Link styleName='product' to={`/details/${pk}`}>
      <div styleName='image-wrapper'>
        <img styleName='image' src={image} alt='Product' />
      </div>
      <div styleName='info'>
        <span styleName='title'>{title}</span>
        <img src={eye} alt='Eye' />
      </div>
    </Link>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object
};

export default CSSModules(ProductItem, styles);
