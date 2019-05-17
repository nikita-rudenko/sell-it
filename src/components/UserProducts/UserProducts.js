import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchOwnProducts, deleteOwnProduct } from 'actions/profile';

import CSSModules from 'react-css-modules';
import styles from './UserProducts.module.scss';

import ProductItem from './ProductItem';
import Loading from 'components/Loading/Loading';

class UserProducts extends Component {
  componentDidMount() {
    this.props.fetchOwnProducts();
  }

  deleteProduct = id => {
    this.props.deleteOwnProduct(id);
  };

  mapProducts = () => {
    const { ownProducts: data, isFetching } = this.props;

    if (data !== null && !isFetching && data.length) {
      return data.map(item => {
        return (
          <ProductItem
            key={item.pk}
            item={item}
            deleteProduct={this.deleteProduct}
          />
        );
      });
    } else if (isFetching) {
      return <Loading />;
    } else if (!isFetching) {
      return <h3>No data.</h3>;
    }
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

const mapStateToProps = state => ({
  ownProducts: state.profile.ownProducts,
  isFetching: state.profile.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchOwnProducts: () => dispatch(fetchOwnProducts()),
  deleteOwnProduct: id => dispatch(deleteOwnProduct(id))
});

UserProducts.propTypes = {
  isFetching: PropTypes.bool,
  ownProducts: PropTypes.array,
  fetchOwnProducts: PropTypes.func,
  deleteOwnProduct: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(UserProducts, styles));
