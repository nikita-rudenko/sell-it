import React from 'react';
import styles from './Sign.module.scss';

export const validator = values => {
  console.log(values);

  const errors = {};
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/i;

  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Your password is too short!';
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      'Your password must have at least one letter and one number';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email';
  }

  return errors;
};

export const hint = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <>
      <input
        className={styles.input}
        {...input}
        placeholder={placeholder}
        type={type}
        id={id}
      />
      {touched && error && <p className={styles.hint}>{error}</p>}
    </>
  );
};
