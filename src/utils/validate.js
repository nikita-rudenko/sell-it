export const validate = values => {
  const errors = {};
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/i;

  // USERNAME
  if (!values.username) {
    errors.username = 'Username is required';
  }

  // EMAIL
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email';
  }

  // PASSWORD
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Your password is too short!';
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      'Your password must include at least one letter and one number';
  }

  // PASSWORD 1 (SIGN UP)
  if (!values.password1) {
    errors.password1 = 'Password is required';
  } else if (values.password1.length < 8) {
    errors.password1 = 'Your password is too short!';
  } else if (!passwordRegex.test(values.password1)) {
    errors.password1 =
      'Your password must include at least one letter and one number';
  }

  // PASSWORD 1-2 CONFIRMATION (SIGN UP)
  if (!values.password2) {
    errors.password2 = 'Please, confirm your password';
  } else if (values.password1 !== values.password2) {
    errors.password2 = "Your passwords don't match";
  }

  return errors;
};
