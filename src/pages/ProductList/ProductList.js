import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchProducts } from 'actions/productActions';

import styles from './ProductList.module.scss';
import CSSModules from 'react-css-modules';

import Header from 'components/Header/Header';
import ProductItem from 'components/ProductItem/ProductItem';
import Footer from 'components/Footer/Footer';
import Loading from 'components/Loading/Loading';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  mapProducts = (data, isFetching) => {
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

  render() {
    const { productList, isFetching } = this.props;
    const data = productList;

    return (
      <>
        <Header />
        <main>
          {!isFetching ? (
            <section styleName='product-list'>
              {this.mapProducts(data, isFetching)}
            </section>
          ) : (
            <Loading />
          )}
        </main>
        <Footer />
      </>
    );
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
