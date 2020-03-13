import * as type from '../type/type';

export const getTrendingGifs = () => {
  return({
    type: type.GET_TRENDING_GIFS
  })
}

export const getTrendingGifsSuccess = (data) => {
  return({
    type: type.GET_TRENDING_GIFS_SUCCESS,
    payload: data
  })
}

export const getTrendingGifsFail = (error) => {
  return({
    type: type.GET_TRENDING_GIFS_FAIL,
    error,
  })
}

// get more gif
export const getMoreTrendingGifs = (offset) => {
  return({
    type: type.GET_MORE_TRENDING_GIFS,
    offset
  })
}

export const getMoreTrendingGifsSuccess = (data) => {
  return({
    type: type.GET_MORE_TRENDING_GIFS_SUCCESS,
    payload: data
  })
}

export const getMoreTrendingGifsFail = (error) => {
  return({
    type: type.GET_MORE_TRENDING_GIFS_FAIL,
    error,
  })
}

// loding gif
export const giphyLoading = () => {
  return({
    type: type.GIPHY_LOADING,
  })
}

// search giphy
export const giphySearch = (search = '') => {
  return({
    type: type.GIPHY_SEARCH,
    search
  })
}

export const giphySearchSuccess = (data) => {
  return({
    type: type.GIPHY_SEARCH_SUCCESS,
    payload: data,
  })
}

export const giphySearchFail = (error) => {
  return({
    type: type.GIPHY_SEARCH_FAIL,
    error,
  })
}