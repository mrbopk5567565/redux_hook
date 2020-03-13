import * as type from '../type/type';

export const getValue = () => {
  return({
    type: type.GET_VALUE,
  })
}

export const getValueSuccess = (data) => {
  return({
    type: type.GET_VALUE,
    payload: data
  })
}

export const getValueFail = (error) => {
  return({
    type: type.GET_VALUE,
    error
  })
}

export const setValue = (data) => {
  return({
    type: type.SET_VALUE,
    payload: data
  })
}