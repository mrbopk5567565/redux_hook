import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkDetail = styled(Link)`
  display: flex;
  flex-direction: column;
  width: calc(20% - 10px);
  margin: 5px 0;
  padding: 10px;
  background: #333;
  color: white;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    padding: 10px 0;
    text-transform: capitalize;
  }
`;

function GiphyItem(props) {
  const { id, img, title } = props
  return(
      <LinkDetail to={`/giphy-detail/${id}`}>
        <div>
          <img src={ img }/>
        </div>
        <p>{ title }</p>
      </LinkDetail>
  )
}

export default GiphyItem;