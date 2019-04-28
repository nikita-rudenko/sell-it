import React from 'react';
import styles from './ProductItem.module.scss';

export default function ProductItem() {
	return (
		<div className={styles.product}>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src="img/product-min.png" alt="Product" />
			</div>
			<div className={styles.info}>
				<span className={styles.title}>Product Title</span>
				<span className={styles.btn}>
					<img src="img/icons/fa-eye.png" alt="Eye" />
				</span>
			</div>
		</div>
	);
}
