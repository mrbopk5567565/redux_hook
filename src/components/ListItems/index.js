import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import FlipMove from 'react-flip-move';
import styled from 'styled-components';

const WrapperFlipMove = styled(FlipMove)`
  
  p {
    width: 250px;
    height: 50px;
    background: #61dafb;
    border-radius: 10px;
    margin: 20px auto;
  }

  p input {
    padding: 0 20px;
    font-size: 18px;
    margin: 0;
    color: #764ABC;
    background: none;
  }
`;

function ListItems(props){
  const { items, setUpdate, deleteItem } = props;
  return(
    <WrapperFlipMove duration={300} easing="ease-in-out">
      {items && items.map((item, idx) =>
        <p key={ idx }>
          <input
            id={ item.key } 
            value={ item.text } 
            onChange={ (e) => setUpdate(e.target.value, item.key) }
          />
          <span>
            <FontAwesomeIcon className="faicons" onClick={() => {
                deleteItem(item.key)
            }} icon={ faTrashAlt } />
          </span>
        </p>
      )}
    </WrapperFlipMove>
  )
}

export default ListItems;