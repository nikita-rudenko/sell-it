import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { validate } from 'utils/validate';
import FormField from './FormField';

import styles from './SignUp.module.scss';

let SignUp = ({ handleSubmit, submitting, errorMessage, children }) => (
  <form className={styles.body} onSubmit={handleSubmit}>
    {children}
    <div>
      <Field
        component={FormField}
        autocomplete='username'
        name='username'
        id='username'
        type='text'
        placeholder='Username'
      />
      <Field
        component={FormField}
        autocomplete='email'
        name='email'
        id='email'
        type='email'
        placeholder='Email'
      />
      <Field
        className={styles.input}
        autocomplete='new-password'
        component={FormField}
        name='password1'
        id='password1'
        type='password'
        placeholder='Password'
      />
      <Field
        className={styles.input}
        autocomplete='new-password'
        component={FormField}
        name='password2'
        id='password2'
        type='password'
        placeholder='Confirm password'
      />
    </div>
    <button className={styles.submit} type='submit' disabled={submitting}>
      Sign Up
    </button>
    {errorMessage ? (
      <p className={styles.error}>
        Error! {errorMessage[Object.keys(errorMessage)[0]]}
      </p>
    ) : null}
  </form>
);

SignUp = reduxForm({
  form: 'sign-up',
  validate
})(SignUp);

export default SignUp;
