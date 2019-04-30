import React, { Component } from "react";
import Header from "../Header/Header";
import ProductItem from "../ProductItem/ProductItem";
import Footer from "../Footer/Footer";
import styles from "./ProductList.module.scss";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { productList } = this.props;
    const data = productList.data;

    return (
      <>
        <Header />
        <main>
          <section className={styles.productList}>
            {data
              ? data.map(item => {
                  return <ProductItem key={item.pk} item={item} />;
                })
              : "Loading..."}
          </section>
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
)(ProductList);
