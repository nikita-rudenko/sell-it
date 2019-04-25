import React from "react";
// import "./Header.scss";
import styles from "./Header.module.scss";

import PropTypes from "prop-types";

const componentProps = {
  shift: PropTypes.func.isRequired
};

export default function Header(props) {
  const { shift } = props;

  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="img/logo-small-min.png"
        alt="Small logo."
      />
      <div className={styles.search}>
        <img
          className={styles.search__icon}
          src="img/icons/fa-search.png"
          alt="Search icon"
        />
        <input
          className={styles.search__input}
          type="text"
          placeholder="Try to find something"
        />
      </div>
      <div className={styles.userblock}>
        <div className={styles.userblock__profile}>
          <img
            className={styles.userblock__avatar}
            src="img/avatar-min.png"
            alt="User avatar"
          />
          <div className={styles.userblock__name}>Kim Evans</div>
        </div>
        <button onClick={shift} className={styles.userblock__signout}>
          <img
            src="img/icons/fa-sign-out.png"
            title="Sign Out"
            alt="Sign Out."
          />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = componentProps;
