import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

function TextInput(props){
  // console.log(props)
  return(
    <Wrapper>
      <label htmlFor={ props.name }>{ props.label }</label>
      <input
        type="text"
        id={ props.name }
        name={ props.name }
        value={ props.value || '' }
        onChange={ props.onChange }
      />
    </Wrapper>
  )
}

export default TextInput