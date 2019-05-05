import React, { Component } from 'react';
import styles from './ProductItem.module.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import defImg from '../../assets/img/default.jpg';
import eye from '../../assets/img/icons/fa-eye.png';

class ProductItem extends Component {
  render() {
    const { theme, images, pk } = this.props.item;

    const image = images.length ? images[0].file : defImg;
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
  }
}

export default CSSModules(ProductItem, styles);
