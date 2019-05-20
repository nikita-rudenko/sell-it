import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions/products';

import styles from './ProductList.module.scss';
import CSSModules from 'react-css-modules';

import ProductItem from 'components/ProductItem/ProductItem';
import Loading from 'components/Loading/Loading';
import MainLayout from 'layouts/MainLayout';

export class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  mapProducts = () => {
    const { productList: data, isFetching } = this.props;

    return data !== null && !isFetching && data.length > 0 ? (
      data.map(item => {
        return <ProductItem key={item.pk} item={item} />;
      })
    ) : (
      <div styleName='no-results'>
        <h1>No results</h1>
      </div>
    );
  };

  renderProducts = () => {
    const { productList: data, isFetching } = this.props;

    if (!isFetching && data) {
      return (
        <section styleName='product-list'>
          {this.mapProducts(data, isFetching)}
        </section>
      );
    } else if (!isFetching) {
      return <p>No data...</p>;
    } else if (isFetching) {
      return <Loading />;
    }
  };

  render() {
    return <MainLayout>{this.renderProducts()}</MainLayout>;
  }
}

const mapStateToProps = state => ({
  productList: state.product.productList,
  isFetching: state.product.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

ProductList.propTypes = {
  productList: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchProducts: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductList, styles));
