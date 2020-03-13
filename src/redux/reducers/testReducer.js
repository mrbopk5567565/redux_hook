import * as type from '../type/type';

const initialState = {
  data: 'tien',
  arr: [],
};

export default function(state = initialState, action){
  switch(action.type){
    case type.TEST_REDUX:
      return {
      }
    case type.TEST_REDUX_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case type.TEST_REDUX_FAIL:
      return{
      };

    case type.UPDATE_TEST_REDUX:
      return {
      }
    case type.UPDATE_TEST_REDUX_SUCCESS:
      return {
        ...state,
        data: action.payload,
        arr: [...state.arr, action.payload]
      }
    case type.UPDATE_TEST_REDUX_FAIL:
      return{
      };
    default:
      return state;
  }
}