import React, { useState } from 'react';
import styled from 'styled-components';
import ListItems from '../ListItems'

const Wrapper = styled.div`
  margin: 40px 0;
  header {
    width: 40%;
    margin: 20px auto;
    text-align: center;
    background-color: #3f3160;
    min-height:500px;
    border-radius: 30px;
  }

  form {
    padding: 20px auto;
  }

  input {
    background: #764ABC;
    border: 0; 
    color: #fff;
    width: 200px;
    height: 50px;
    margin: 20px;
    padding: 0 20px;
    font-size: 18px;
    border-radius: 10px;
  }

  input::placeholder {
    color: #61dafb;
  }

  input:focus {
    outline: none;
  }

  button {
    font-size: 18px;
    height: 50px;
    width: 80px;
    border-radius: 5px;
    border: 0;
    background-color: #7ed6df;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
`;

function TodoApp(){
  const [ items, setItems ] = useState([]);
  const [ currentItem, setCurrentItem ] = useState({
    text: '',
    key: ''
  })

  const handleInput = (e) => {
    setCurrentItem({text: e.target.value, key: Date.now()})
  }

  const addItem = (e) => {
    e.preventDefault();
    const newItem = currentItem;

    if (newItem.text !== ""){
      setItems([...items, newItem])
      setCurrentItem({text: '', key: ''})
    }
  }

  const setUpdate = (text, key) => {
    const itemsUpdate = items.map(item => {
      if (item.key === key){
        item.text = text;
      }
      return item;
    })
    setItems(itemsUpdate)
  }

  const deleteItem = (key) => {
    const filteredItems= items.filter(item => item.key !== key);
    setItems(filteredItems)
  }

  return(
    <Wrapper>
      <header>
        <form>
          <input 
            type="text"
            placeholder="Enter text"
            value={ currentItem.text }
            onChange= { handleInput }
          />
          <button onClick={(e) => { addItem(e) }}>Add</button>
        </form>

        <ListItems items={ items } setUpdate={ setUpdate } deleteItem={ deleteItem }/>
      </header>
    </Wrapper>
  )
}

export default TodoApp;