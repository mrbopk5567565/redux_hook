import { combineReducers } from 'redux';
import testReducer from './testReducer';
import valueReducer from './valueReducer';
import giphyReducer from './giphyReducer';

export default combineReducers({
  test: testReducer,
  values: valueReducer,
  giphy: giphyReducer,
})