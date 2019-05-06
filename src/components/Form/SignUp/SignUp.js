import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import styles from '../shared/Sign.module.scss';
import { hint, validator } from '../shared/validation';

let SignUp = ({ handleSubmit, pristine, submitting, valid }) => (
  <form className={styles.body} onSubmit={handleSubmit}>
    <div>
      <Field
        component={hint}
        name='firstName'
        id='firstName'
        type='text'
        placeholder='First Name'
      />
      <Field
        component={hint}
        name='lastName'
        id='lastName'
        type='text'
        placeholder='Last Name'
      />

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
    <button
      className={styles.submit}
      type='submit'
      disabled={!valid || pristine || submitting}
    >
      Sign In
    </button>
  </form>
);

SignUp = reduxForm({
  form: 'sign-up',
  validate: validator
})(SignUp);

export default SignUp;
