import React from "react";
import Header from "../Header/Header";
import ProductItem from "./ProductItem/ProductItem";
import Footer from "../Footer/Footer";
import "./ProductList.scss";

import PropTypes from "prop-types";

const componentProps = {
  shift: PropTypes.func.isRequired
};

export default function ProductList(props) {
  const { shift } = props;

  return (
    <>
      <Header shift={shift} />
      <main>
        <section className="product-list u-mt-huge">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </section>
      </main>
      <Footer />
    </>
  );
}

Header.propTypes = componentProps;
