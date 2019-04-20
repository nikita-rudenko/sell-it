import React, { Component } from 'react';

export default class ProductList extends Component {
	render() {
		return (
			<>
				<header className="header">
					<img
						className="header__logo logo-small"
						src="img/logo-small-min.png"
						alt="Small logo."
					/>
					<div className="header__search search">
						<img
							className="search__icon"
							src="img/icons/fa-search.png"
							alt="Search icon"
						/>
						<input
							className="search__input"
							type="text"
							placeholder="Try to find something"
						/>
					</div>
					<div className="user-block">
						<div className="user-block__profile">
							<img
								className="user-block__avatar"
								src="img/avatar-min.png"
								alt="User avatar"
							/>
							<div className="user-block__name">Kim Evans</div>
						</div>
						<button onClick={this.props.shift} className="user-block__sign-out">
							<img src="img/icons/fa-sign-out.png" alt="" />
						</button>
					</div>
				</header>
				<main>
					<section className="product-list">
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
				<footer className="footer">2017 - front-end labs Light IT</footer>
			</>
		);
	}
}
