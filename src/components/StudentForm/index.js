import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';

const Wrapper = styled.div``;
const ContainerInput = styled.div``;

function StudentForm(){
  const [ name, setName ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ math, setMath ] = useState('');
  const [ english, setEnglish ] = useState('');
  const [ error, setErrror ] = useState({});

  const handleChange = (e) => {
    switch(e.target.name){
      case 'name':
        setName(e.target.value);
        break;
      case 'gender':
        setGender(e.target.value);
        break;
    }az
    console.log('asd',name, gender)
  }

  return(
    <Wrapper>
      <h2>Student Form</h2>
      <ContainerInput>
        <TextInput name="name" label="Name" value={ name } onChange={ (e) => handleChange(e) } error={ error }/>
        <TextInput name="gender" label="Gender" value={ gender } onChange={ (e) => handleChange(e) } error={ error }/>
      </ContainerInput>
    </Wrapper>
  )
}

export default StudentForm;