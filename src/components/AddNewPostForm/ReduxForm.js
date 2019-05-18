import React from 'react';

import styles from './AddNewPostForm.module.scss';

export const FormField = ({
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
        min={type === 'number' ? 0 : null}
        id={id}
      />
      {touched && error && <p className={styles.hint}>{error}</p>}
    </>
  );
};

export const RequiredFormField = ({
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

export const checkBoxField = ({ input, type, id }) => {
  return <input className={styles.checkbox} {...input} type={type} id={id} />;
};

export const selectField = ({ input, children }) => (
  <select className={styles.select} {...input}>
    {children}
  </select>
);
