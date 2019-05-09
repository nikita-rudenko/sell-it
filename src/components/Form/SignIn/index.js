import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import styles from '../shared/Sign.module.scss';
import { FormField } from '../shared/FormField';
import { validate } from '../../../utils/validate';

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
