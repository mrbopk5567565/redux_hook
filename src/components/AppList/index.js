import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import FlipMove from 'react-flip-move';
import styled from 'styled-components';

const WrapperFlipMove = styled(FlipMove)`
  
`;

function AppList(props){
  const [value, setValue] = useState({text: ''});
  const { values, setUpdate, deleteItem } = props;
  return(
    <WrapperFlipMove duration={300} easing="ease-in-out">
      {values && values.map((item, idx) =>
        <p key={ idx }>
          <input
            id={ item.key } 
            value={ item.text } 
            onChange={ (e) => setUpdate(e.target.value, item.key) }
            // onChange={ (e) => setValue({text: e.target.value}) }
          />
          {/* <div>{ item.text }</div> */}
          <span>
            <FontAwesomeIcon className="iconTrash" onClick={() => {
                deleteItem(item.key)
            }} icon={ faTrashAlt } />
            {/* <FontAwesomeIcon className="iconEdit" onClick={() => {
                setUpdate(value, item.key)
            }} icon={ faEdit } /> */}
          </span>
        </p>
      )}
    </WrapperFlipMove>
  )
}

export default AppList; 