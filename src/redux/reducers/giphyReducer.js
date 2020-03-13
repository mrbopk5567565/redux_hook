import { GET_TRENDING_GIFS, GET_MORE_TRENDING_GIFS, GIPHY_LOADING, GET_TRENDING_GIFS_SUCCESS, GET_TRENDING_GIFS_FAIL, GET_MORE_TRENDING_GIFS_SUCCESS, GIPHY_SEARCH_SUCCESS, GIPHY_SEARCH_FAIL, GIPHY_SEARCH} from '../type/type';

const initialState = {
  trending: {
    offset: 0,
  },
  loading: false,
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_TRENDING_GIFS:
      return {
        ...state
      }
    case GET_TRENDING_GIFS_SUCCESS:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      }
    case GET_TRENDING_GIFS_FAIL:
      return {
      }

    case GET_MORE_TRENDING_GIFS:
      return {
        ...state
      }
    case GET_MORE_TRENDING_GIFS_SUCCESS:
      return {
        ...state,
        trending: {
          ...action.payload,
          data: [ ...state.trending.data, ...action.payload.data ],
        },
        loading: false,
      };

    case GIPHY_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GIPHY_SEARCH:
      return {
        ...state
      }
    case GIPHY_SEARCH_SUCCESS:
      return {
        ...state,
        trending: action.payload
      }
    case GIPHY_SEARCH_FAIL:
      return {
      }
    default:
      return state;
  }
}