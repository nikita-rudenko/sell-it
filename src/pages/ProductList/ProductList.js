import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'rc-pagination';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions/products';

import styles from './ProductList.module.scss';
import CSSModules from 'react-css-modules';
import 'rc-pagination/assets/index.css';

import ProductItem from 'components/ProductItem/ProductItem';
import Loading from 'components/Loading/Loading';
import MainLayout from 'layouts/MainLayout';

export class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  onChange = page => {
    this.props.fetchProducts(page);
  };

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
    const { productList: data, metaData, isFetching } = this.props;

    if (!isFetching && data) {
      const { page, total, per_page } = metaData;
      const total_products = total * per_page;

      return (
        <section styleName='product-list'>
          {this.mapProducts(data, isFetching)}
          <Pagination
            styleName='pagination'
            onChange={this.onChange}
            current={page}
            total={total_products}
          />
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
  metaData: state.product.metaData,
  isFetching: state.product.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: page => dispatch(fetchProducts(page))
});

ProductList.propTypes = {
  productList: PropTypes.array,
  metaData: PropTypes.object,
  isFetching: PropTypes.bool,
  fetchProducts: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductList, styles));
