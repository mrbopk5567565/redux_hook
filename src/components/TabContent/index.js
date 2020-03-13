import React from 'react';
import styled from 'styled-components';
import './TabContent.css';
// import useState from '../../images/useState.png'

const Wrapper = styled.div`
`;

function TabContent(props){
  const { content, active, hook, useState, redux } = props;
  return (
    <Wrapper className={ `content ${active ? 'active' : ''}` }>
      <h3>
        { content && content }
      </h3>
      { hook && hook.map((item, key) => 
        <div key={ key } className="content--tabFirst">{ item.title }</div>
      )}
      { useState && useState.map((item, key) =>
        <div key={ key } className="content--basic">
          <div className="content--basic--name">{ item.name }</div>
          <img src={ item.img }/>
          { item.img2 && <img src={ item.img2 }/> }
          { item.img3 && <img src={ item.img3 }/> }
        </div>
      )}
      { redux && redux.map((item, key) =>
        <div key={ key } className="content--basic">
        <div className="content--basic--name">{ item.name }</div>
        <img src={ item.img }/>
        { item.img2 && <img src={ item.img2 }/> }
        { item.img3 && <img src={ item.img3 }/> }
      </div>
      )}
    </Wrapper>
  )
}

export default TabContent;