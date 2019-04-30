import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Default.module.scss';

export default function Default({ location }) {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.error}>Error 404</h1>
      <h2 className={styles.info}>
        No match for <code>{location.pathname}</code>
      </h2>
      <Link className={styles.link} to='/'>
        Main page
      </Link>
    </div>
  );
}
