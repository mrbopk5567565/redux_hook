import React from 'react';
import dataContent from './data/dataContent';
import TabTitle from '../TabTitle';
import TabContent from '../TabContent';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto;
`;
const Tab = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #95a5a6;
`;

function ContentSection(){
  const [ index, setIndex ] = React.useState(0);

  return (
    <Wrapper>
      <Tab>
        { dataContent && dataContent.map((item, idx) =>
          <TabTitle
            key={ idx }
            title={ item.title }
            active={ index === idx }
            onClick={ () => setIndex( idx ) }
          />
        )}
      </Tab>
      { dataContent && dataContent.map((item, idx) =>
        <TabContent
          key={ idx }
          content={ item.content }
          hook = { item.hook }
          useState = { item.useState }
          redux = { item.redux }
          active= { index === idx }
        />
      )}
    </Wrapper>
  )
}

export default ContentSection;