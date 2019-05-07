import { combineReducers } from 'redux';
import productReducer from './productReducer';
import profileReducer from './profileReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  product: productReducer,
  auth: formReducer,
  profile: profileReducer
});

export default rootReducer;
