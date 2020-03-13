import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/valueAction';
import * as type from '../type/type';

function* onGetValue(){
  try {
    yield put(actions.getValueSuccess())
  } catch (error) {
    yield put(actions.getValueFail(error))
  }
}

export default function* valueSaga() {
  yield takeLatest( type.GET_VALUE, onGetValue )
}