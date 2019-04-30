import React, { Component } from 'react';
import Header from '../Header/Header';
import ProductItem from '../ProductItem/ProductItem';
import Footer from '../Footer/Footer';
import styles from './ProductList.module.scss';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('http://light-it-04.tk/api/posters/')
      .then(res => res.json())
      .then(obj =>
        this.setState({
          data: obj.data
        })
      );
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <Header />
        <main>
          <section className={styles.productList}>
            {data
              ? data.map(item => {
                  return <ProductItem key={item.pk} item={item} />;
                })
              : 'Loading...'}
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
