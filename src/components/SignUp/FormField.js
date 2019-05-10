import React from 'react';

import styles from './SignUp.module.scss';

const FormField = ({
  input,
  type,
  placeholder,
  id,
  autocomplete,
  meta: { touched, error }
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

export default FormField;
