import React, { Component } from 'react';
import styles from './ProductItem.module.scss';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setProductID } from '../../actions/ProductActions';

class ProductItem extends Component {
  setProductDetailsID(id) {
    console.log(id);

    this.props.setProductID(id);
  }

  render() {
    const { theme, images, pk } = this.props.item;

    const image = images.length ? images[0].file : 'img/default.jpg';
    const title = theme ? theme : 'Product Title';

    return (
      <div styleName='product'>
        <div styleName='image-wrapper'>
          <img styleName='image' src={image} alt='Product' />
        </div>
        <div styleName='info'>
          <span styleName='title'>{title}</span>
          <Link to='/details' onClick={() => this.setProductDetailsID(pk)}>
            <img src='img/icons/fa-eye.png' alt='Eye' />
          </Link>
        </div>
      </div>
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
