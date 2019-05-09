import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { validate } from 'utils/validate';

import styles from './SignIn.module.scss';

const FormField = ({
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

let SignIn = ({ handleSubmit, submitting }) => (
  <form className={styles.body} onSubmit={handleSubmit}>
    <div>
      <Field
        className={styles.input}
        autocomplete='username'
        component={FormField}
        name='email'
        id='email'
        type='email'
        placeholder='Email'
      />
      <Field
        className={styles.input}
        autocomplete='current-password'
        component={FormField}
        name='password'
        id='password'
        type='password'
        placeholder='Password'
      />
    </div>
    <button className={styles.submit} type='submit' disabled={submitting}>
      Sign In
    </button>
  </form>
);

SignIn = reduxForm({
  form: 'sign-in',
  validate
})(SignIn);

export default SignIn;
