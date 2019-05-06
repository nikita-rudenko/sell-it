import { combineReducers } from 'redux';
import productReducer from './productReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  product: productReducer,
  form: formReducer
});

export default rootReducer;
