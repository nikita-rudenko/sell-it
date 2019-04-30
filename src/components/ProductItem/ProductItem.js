import React from "react";
import styles from "./ProductItem.module.scss";

export default function ProductItem(props) {
  const { theme, images } = props.item;

  return (
    <div className={styles.product}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={images.length ? images[0].file : "img/default.jpg"}
          alt="Product"
        />
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{theme ? theme : "Product Title"}</span>
        <span className={styles.btn}>
          <img src="img/icons/fa-eye.png" alt="Eye" />
        </span>
      </div>
    </div>
  );
}
