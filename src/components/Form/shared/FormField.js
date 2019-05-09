import React from 'react';
import styles from './Sign.module.scss';

export const FormField = ({
  input,
  type,
  placeholder,
  id,
  autocomplete,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <>
      <input
        className={styles.input}
        autoComplete={autocomplete}
        {...input}
        placeholder={placeholder}
        type={type}
        id={id}
      />
      {touched && error && <p className={styles.hint}>{error}</p>}
    </>
  );
};
