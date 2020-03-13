import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/testAction';
import * as type from '../type/type';

function* onTestSaga(action){
  try {
    yield put(actions.testReduxSuccess())
  } catch (error) {
    yield put(actions.testReduxFail(error))
  }
}

function* onUpdateTestSaga(action){
  console.log('saga', action)
  try {
    console.log('success', action)
    yield put(actions.updateTestReduxSuccess())
  } catch (error) {
    yield put(actions.testReduxFail(error))
  }
}

function* testSaga() {
  yield takeLatest(type.TEST_REDUX, onTestSaga)
  yield takeLatest(type.UPDATE_TEST_REDUX, onUpdateTestSaga)
}

export default testSaga;