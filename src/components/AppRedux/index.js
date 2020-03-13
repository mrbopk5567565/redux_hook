import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as type from '../../redux/type/type';
import AppList from '../AppList'

const Wrapper = styled.div`
  width: 40%;
  min-height: 500px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  background: grey;

  input {
    border-radius: 10px;
    width: 200px;
    height: 50px;
    padding: 0 10px;
    outline: none;
    margin-right: 20px;
  }

  button {
    border-radius: 10px;
    width: 80px;
    height: 50px;
    outline: none;
  }
`;

function AppRedux(props) {
  const [ currValue, setCurrValue ] = useState({text: '', key: ''});
  // console.log(props)

  const addValue = (e) => {
    e.preventDefault();
    if(currValue.text !== ""){
      props.dispatch({ type: type.GET_VALUE_SUCCESS, payload: currValue })
      setCurrValue({text: '', key: ''})
    }
  }

  const setUpdate = (text, key) => {
    const valueEdit = props.values.map(item => {
      if (item.key === key){
        item.text = text;
      }
      return item;
    })
    props.dispatch({ type: type.SET_VALUE, payload: valueEdit})
  }

  const deleteItem = (key) => {
    const filteredItem = props.values.filter(item => item.key !== key)
    props.dispatch({ type: type.SET_VALUE, payload: filteredItem})
    console.log(filteredItem)
  }

  return(
    <div>
      <Wrapper>
        <header>
          <form>
            <input 
              type="text"
              placeholder="Enter text"
              value={ currValue.text }
              onChange= {(e) => setCurrValue({text: e.target.value, key: Date.now()})}
            />
            <button onClick={ (e) => addValue(e) }>Add</button>
          </form>
          <AppList values={ props.values } setUpdate={ setUpdate } deleteItem={ deleteItem }/>
        </header>
      </Wrapper>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    values: state.values.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);