import { combineReducers } from 'redux';
import productReducer from './productReducer';
import profileReducer from './profileReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  product: productReducer,
  form: formReducer,
  profile: profileReducer,
  auth: authReducer
});

export default rootReducer;
