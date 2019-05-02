import React, { Component } from 'react';
import styles from './ProductList.module.scss';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/ProductActions';
import Header from '../Header/Header';
import ProductItem from '../ProductItem/ProductItem';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

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
    const data = productList.data;

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

const mapStateToProps = state => ({
  productList: state.productList,
  isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(ProductList, styles));
