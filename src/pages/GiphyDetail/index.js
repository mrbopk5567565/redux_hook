import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Giphy = styled.div`
  width: 50%;
  margin: 50px auto 0;
  padding: 10px;
  background: #f3eded;
  text-align: center;

  img {
    max-width: 100%;
  }
`;
const Description = styled.div`
  font-weight: 600;
`;
const Title = styled.div``;

function GiphyDetail(props) {

  const handle = () => {
    const id = props.match.params.id;
    const idItem = props.trendingGifs.filter(item => item.id === id);
    console.log(idItem[0])
    return idItem[0]
  }

  const { username, title, images } = handle()

  return(
    <Wrapper>
      <Giphy>
        <img src={ images.original.url }/>
        <Description>
          <Title>{ `Title: ${title}` }</Title>
          <Title>{ `Username: ${username ? username : 'Nothing :)'}` }</Title>
        </Description>
      </Giphy>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    trendingGifs: state.giphy.trending.data,
  }
}

export default connect(mapStateToProps)(GiphyDetail);