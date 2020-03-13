import * as type from '../type/type';

export const testRedux = () => {
  return({
    type: type.TEST_REDUX,
  })
} 

export const testReduxSuccess = (data) => {
  return({
    type: type.TEST_REDUX_SUCCESS,
    payload: data
  })
}

export const testReduxFail = (error) => {
  return({
    type: type.TEST_REDUX_FAIL,
    payload: error
  })
} 

export const getTestRedux = () => {
  return({
    type: type.GET_TEST_REDUX,
  })
} 

export const getTestReduxSuccess = (data) => {
  return({
    type: type.GET_TEST_REDUX_SUCCESS,
    payload: data
  })
}

export const getTestReduxFail = (error) => {
  return({
    type: type.GET_TEST_REDUX_FAIL,
    payload: error
  })
}

export const updateTestRedux = () => {
  return({
    type: type.UPDATE_TEST_REDUX,
  })
} 

export const updateTestReduxSuccess = (data) => {
  return({
    type: type.UPDATE_TEST_REDUX_SUCCESS,
    payload: data
  })
}

export const updateTestReduxFail = (error) => {
  return({
    type: type.UPDATE_TEST_REDUX_FAIL,
    payload: error
  })
}