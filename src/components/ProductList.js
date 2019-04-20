import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class ProductList extends Component {
	render() {
		return (
			<>
				<Header shift={this.props.shift} />
				<main>
					<section className="product-list u-mt-huge">
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>{' '}
						<div className="product">
							<div className="product__image-wrapper">
								<img
									className="product__image"
									src="img/product-min.png"
									alt="Product"
								/>
							</div>
							<div className="product__info">
								<span className="product__title">Product Title</span>
								<span className="product__btn">
									<img src="img/icons/fa-eye.png" alt="Eye" />
								</span>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</>
		);
	}
}
