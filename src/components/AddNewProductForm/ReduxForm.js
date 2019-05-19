import React from 'react';

import styles from './AddNewProductForm.module.scss';

export const FormInput = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error }
}) => {
  return (
    <>
      <input
        className={styles.input}
        {...input}
        placeholder={placeholder}
        type={type}
        min={type === 'number' ? 1 : null}
        id={id}
      />
      {touched && error && <p className={styles.hint}>{error}</p>}
    </>
  );
};

export const FormRequiredInput = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error }
}) => {
  return (
    <>
      <input
        className={styles.input}
        {...input}
        placeholder={placeholder}
        type={type}
        id={id}
        required
      />
      {touched && error && <p className={styles.hint}>{error}</p>}
    </>
  );
};

export const FormCheckbox = ({ input, type, id }) => {
  return <input className={styles.checkbox} {...input} type={type} id={id} />;
};

export const FormSelect = ({ input, children }) => (
  <select className={styles.select} {...input}>
    {children}
  </select>
);
