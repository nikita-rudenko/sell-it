import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { fetchOwnProducts } from 'actions/profile';

import CSSModules from 'react-css-modules';
import styles from './UserProducts.module.scss';

import ProductItem from './ProductItem';

class UserProducts extends Component {
  componentDidMount() {
    this.props.fetchOwnProducts();
  }

  mapProducts = () => {
    const { ownProducts: data, isFetching } = this.props;

    return data !== null && !isFetching && data.length > 0 ? (
      data.map(item => {
        return <ProductItem key={item.pk} item={item} />;
      })
    ) : (
      <div>
        <h1>No results</h1>
      </div>
    );
  };

  render() {
    return (
      <div styleName='product-list'>
        <h2>User Products</h2>
        <ul>{this.mapProducts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { ownProducts, isFetching } = state.profile;
  return { ownProducts, isFetching };
};

const mapDispatchToProps = dispatch => ({
  fetchOwnProducts: () => dispatch(fetchOwnProducts())
});

UserProducts.propTypes = {
  isFetching: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(UserProducts, styles));
