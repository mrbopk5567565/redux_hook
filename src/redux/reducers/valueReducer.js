import * as type from '../type/type';

const initialState = {
  data: []
};

export default function(state = initialState, action){
  switch(action.type){
    case type.GET_VALUE:
      return {};
    case type.GET_VALUE_SUCCESS:
      return{
        ...state,
        data: [ ...state.data, action.payload ]
      }
    case type.GET_VALUE_FAIL:
      return{}

    case type.SET_VALUE:
      return{
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}