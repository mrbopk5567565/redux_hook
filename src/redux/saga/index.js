import { all } from 'redux-saga/effects';
import testSaga from './testSaga';
import valueSaga from './valueSaga';
import giphySaga from './giphySaga'

export const rootSaga = function* root() {
  yield all([
    testSaga(),
    valueSaga(),
    giphySaga(),
  ])
}