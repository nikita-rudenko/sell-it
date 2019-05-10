import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { validate } from '../../utils/validate';

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

let SignUp = ({ handleSubmit, submitting, errorMessage }) => (
  <form className={styles.body} onSubmit={handleSubmit}>
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
    {errorMessage ? (
      <p className={styles.hint}>
        Error! {errorMessage[Object.keys(errorMessage)[0]]}
      </p>
    ) : null}
    <button className={styles.submit} type='submit' disabled={submitting}>
      Sign Up
    </button>
  </form>
);

SignUp = reduxForm({
  form: 'sign-up',
  validate
})(SignUp);

export default SignUp;
