import React from 'react';
import styled from 'styled-components';
import './TabTitle.css';

const Wrapper = styled.div`
`;

function TabTitle(props){
  const { title, active, onClick } = props;
  return(
    <Wrapper className={ `tab ${active ? 'active' : ''}`} onClick={ onClick }>
      { title }
    </Wrapper>
  )
}

export default TabTitle;