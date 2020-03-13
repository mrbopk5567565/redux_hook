export const fetchAPI = async (url, api_key) => {
  let res = await fetch(`${url}?api_key=${api_key}&limit=20`, {
    method: 'GET',
  });
  let resJson = await res.json()
  return resJson
}

export const fetchMoreAPI = async (url, api_key, offset) => {
  let res = await fetch(`${url}?api_key=${api_key}&limit=20&offset=${offset}`, {
    method: 'GET',
  });
  let resJson = await res.json()
  return resJson
}

export const fetchSearchAPI = async (url, api_key, q) => {
  let res = await fetch(`${url}?api_key=${api_key}&limit=5&q=${q}`, {
    method: 'GET',
  });
  let resJson = await res.json()
  return resJson
}