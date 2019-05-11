import { combineReducers } from 'redux';
import authReducer from './auth';
import productReducer from './products';
import profileReducer from './profile';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  profile: profileReducer,
  form: formReducer
});

export default rootReducer;
