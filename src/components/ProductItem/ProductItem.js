import React, { Component } from 'react';
import styles from './ProductItem.module.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProductID } from '../../actions/ProductActions';
import defImg from '../../img/default.jpg';
import eye from '../../img/icons/fa-eye.png';

class ProductItem extends Component {
  setProductDetailsID(id) {
    this.props.setProductID(id);
  }

  render() {
    const { theme, images, pk } = this.props.item;

    const image = images.length ? images[0].file : defImg;
    const title = theme ? theme : 'Product Title';

    return (
      <Link
        styleName='product'
        to='/details'
        onClick={() => this.setProductDetailsID(pk)}
      >
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

const mapStateToProps = state => ({
  details: state.details
});

const mapDispatchToProps = dispatch => ({
  setProductID: id => dispatch(setProductID(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductItem, styles));
