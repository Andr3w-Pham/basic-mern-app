// The main point of this root reducer is to bring together all of our other reducers
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});