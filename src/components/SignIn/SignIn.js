import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { validate } from 'utils/validate';
import FormField from './ReduxForm';

import styles from './SignIn.module.scss';

let SignIn = ({ handleSubmit, submitting, errorMessage, children }) => (
  <form onSubmit={handleSubmit}>
    {children}
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
    {errorMessage ? (
      <p className={styles.error}>
        Error! {errorMessage[Object.keys(errorMessage)[0]]}
      </p>
    ) : null}
  </form>
);

SignIn = reduxForm({
  form: 'sign-in',
  validate
})(SignIn);

export default SignIn;
