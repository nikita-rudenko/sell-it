import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import styles from '../shared/Sign.module.scss';
import { hint, validator } from '../shared/validation';

let SignIn = ({ handleSubmit, submitting }) => (
  <form className={styles.body} onSubmit={handleSubmit}>
    <div>
      <Field
        component={hint}
        name='email'
        id='email'
        type='email'
        placeholder='Email'
      />
      <Field
        className={styles.input}
        component={hint}
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
  validate: validator
})(SignIn);

export default SignIn;
