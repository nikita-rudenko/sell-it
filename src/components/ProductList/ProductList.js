import React from 'react';
import Header from '../Header/Header';
import ProductItem from './ProductItem/ProductItem';
import Footer from '../Footer/Footer';
import styles from './ProductList.module.scss';

export default function ProductList() {
	return (
		<>
			<Header />
			<main>
				<section className={styles.productList}>
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
