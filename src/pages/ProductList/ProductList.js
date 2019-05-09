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

  mapProducts = data => {
    return data ? (
      data.map(item => {
        return <ProductItem key={item.pk} item={item} />;
      })
    ) : (
      <div>"An error occured"</div>
    );
  };

  render() {
    const { productList, isFetching } = this.props;
    const data = productList;

    return (
      <>
        <Header />
        <main>
          {isFetching ? (
            <Loading />
          ) : (
            <section styleName='product-list'>{this.mapProducts(data)}</section>
          )}
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  const { searchQuery, isFetching } = state.product;
  let { productList } = state.product;

  if (searchQuery) {
    productList = productList.filter(product =>
      product.theme.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return {
    productList,
    isFetching
  };
};

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
