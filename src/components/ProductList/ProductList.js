import React from 'react';
import Header from '../Header/Header';
import ProductItem from './ProductItem/ProductItem';
import Footer from '../Footer/Footer';
import './ProductList.scss';

export default function ProductList() {
	return (
		<>
			<Header />
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
