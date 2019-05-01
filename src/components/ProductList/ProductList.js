import React, { Component } from 'react';
import Header from '../Header/Header';
import ProductItem from '../ProductItem/ProductItem';
import Footer from '../Footer/Footer';
import styles from './ProductList.module.scss';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  mapProducts = data => {
    return data
      ? data.map(item => {
          return <ProductItem key={item.pk} item={item} />;
        })
      : 'Loading...';
  };

  render() {
    const { productList } = this.props;
    const data = productList.data;

    return (
      <>
        <Header />
        <main>
          <section styleName='product-list'>{this.mapProducts(data)}</section>
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  productList: state.productList
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductList, styles));
