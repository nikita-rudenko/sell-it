import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchOwnProducts, deleteOwnProduct } from 'actions/profile';

import CSSModules from 'react-css-modules';
import styles from './UserProducts.module.scss';

import UserProductItem from './UserProductItem';

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
      return (
        <ul>
          {data.map(item => {
            return (
              <UserProductItem
                key={item.pk}
                item={item}
                deleteProduct={this.deleteProduct}
              />
            );
          })}
        </ul>
      );
    } else if (!isFetching) {
      return (
        <div styleName='no-data'>
          <h3>No data.</h3>
        </div>
      );
    }
  };

  render() {
    return (
      <div styleName='product-list'>
        <div styleName='heading'>
          <h2>User Products</h2>
        </div>
        {this.mapProducts()}
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
  fetchOwnProducts: PropTypes.func.isRequired,
  deleteOwnProduct: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(UserProducts, styles));
