import React, { Component } from 'react';
import Header from './Header';
import ProductItem from './ProductItem';
import Footer from './Footer';

export default class ProductList extends Component {
	render() {
		return (
			<>
				<Header shift={this.props.shift} />
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
}
