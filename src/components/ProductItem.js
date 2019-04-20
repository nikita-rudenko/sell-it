import React, { Component } from 'react';

export default class ProductItem extends Component {
	render() {
		return (
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
		);
	}
}
