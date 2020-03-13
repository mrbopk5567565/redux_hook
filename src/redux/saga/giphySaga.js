import { put, takeLatest} from 'redux-saga/effects'
import * as type from '../type/type';
import * as actions from '../actions/giphyAction';
import { fetchAPI, fetchMoreAPI, fetchSearchAPI } from '../../utils/common'

const api_key = 'hsstdMEvSfHb4lwbfOFWPOmLD1yHHpqg';
const url = 'https://api.giphy.com/v1/gifs/trending';
const url_search_giphy = 'https://api.giphy.com/v1/gifs/search'

function* onGetTrendingGifs(){
  try {
    const data = yield fetchAPI(url, api_key)
    yield put(actions.giphyLoading())
    yield put(actions.getTrendingGifsSuccess( data ))
  } catch (error) {
    yield put(actions.getTrendingGifsFail(error))
  }
}

function* onGetMoreTrendingGifs(action){
  try {
    const offset = yield action.payload;
    const data = yield fetchMoreAPI(url, api_key, offset)
    yield put(actions.giphyLoading())
    yield put(actions.getMoreTrendingGifsSuccess({...data, offset}))
  } catch (error) {
    yield put(actions.getMoreTrendingGifsFail(error))
  }
}

function* onGiphySearch(action){
  console.log(action)
  try {
    const search = action.search;
    const data = yield fetchSearchAPI(url_search_giphy, api_key, search)
    yield put(actions.giphySearchSuccess(data))
  } catch (error) {
    yield put(actions.giphySearchFail(error))
  }
}

export default function* giphySaga() {
  yield takeLatest(type.GET_TRENDING_GIFS, onGetTrendingGifs)
  yield takeLatest(type.GET_MORE_TRENDING_GIFS, onGetMoreTrendingGifs)
  yield takeLatest(type.GIPHY_SEARCH, onGiphySearch)
}