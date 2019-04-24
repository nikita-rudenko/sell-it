import React from 'react';
import Header from './Header';
import ProductItem from './ProductItem';
import Footer from './Footer';

export default function ProductList(props) {
	return (
		<>
			<Header shift={props.shift} />
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
