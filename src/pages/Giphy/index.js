import React, { useState, useEffect, useMemo } from 'react';
import { connect, useSelector } from 'react-redux'
import GiphyItem from '../../components/GiphyItem';
import * as type from '../../redux/type/type';
// import * as actions from '../../redux/actions/giphyAction';
import styled from 'styled-components';
import { colorLogo, colorReudx, colorHook } from '../../utils/colors';

const Wrapper = styled.div``;
const WrapperGiphy = styled.div`
  padding: 20px;

  h1 {
    color: ${colorLogo};
  }

  .buttons {
    text-align: center;
    margin: 30px 0;
  }

  .btn-loadmore {
    padding: 10px 10px;
    font-size: 14px;
    color: ${colorLogo};
    font-weight: 600;
    background: none;
    border: 1px solid ${colorLogo};
    border-radius: 5px;
    cursor: pointer;
  }
`;
const GiphySearch = styled.div`
  input {
    padding: 10px 10px;
    font-size: 14px;
    color: ${colorReudx};
    outline: none;
    border-radius: 5px 0 0 5px;
    border: 1px solid ${colorReudx};
    border-right: none;
  }

  button {
    border: 1px solid ${colorReudx};
    border-left: none;
    padding: 10px 10px;
    font-size: 14px;
    outline: none;
    border-radius: 0 5px 5px 0;
    background: none;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: ${colorReudx};
    color: ${colorHook};
    transition: 0.3s;
  }
`;
const GiphyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Giphy(props) {
  const [search, setSearch] = useState('');
  useEffect(() => {
    props.dispatch({type: type.GET_TRENDING_GIFS})
  },[props.dispatch])

  const { trendingGifs, loading, offset } = props;

  return(
    <Wrapper>
      <WrapperGiphy className="giphy">
        <GiphySearch className="giphy-search">
          <input type="text" name="search" onChange={ (e) => setSearch(e.target.value) }/>
          <button onClick={ () => props.dispatch({type: type.GIPHY_SEARCH, search}) }>Search gifs</button>
        </GiphySearch>
        <h1>Gif images</h1>
        { trendingGifs && 
          <GiphyList className="giphy-list">
            {trendingGifs.map((item, idx) =>
              <GiphyItem
                key={idx}
                id={item.id}
                img={item.images.original.url}
                title={item.title}
              />
            )}
          </GiphyList>
        }
        <div className="buttons">
          { !loading && <button className="btn-loadmore" onClick={ () => props.dispatch({ type: type.GET_MORE_TRENDING_GIFS, payload: offset + 20}) }>Load more</button> }
        </div>
      </WrapperGiphy>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    trendingGifs: state.giphy.trending.data,
    offset: state.giphy.trending.offset || 0,
    loading: state.giphy.loading,
  }
}

export default connect(mapStateToProps)(Giphy);