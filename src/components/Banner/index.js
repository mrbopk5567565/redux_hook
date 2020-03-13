import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import navData from '../Navigation/NavData/navData';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  /* background: #34495e; */
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  /* font-weight: bold; */
`;

const Hooks = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;

  p {
    font-size: 50px;
    color: #61dafb;
    margin: 0 0 0 5px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

const BackgroundHook = styled.div`
  position: absolute;
  top: 0;
  left: -15%;
  z-index: -1;
  width: 115%;
  height: 300px;
  /* display: inline-block; */
  /* background: #34495e;  */
  background: #764ABC; 
  border-right: 1px solid #764ABC;
  transform: skewX(-10deg);
`;

const IconReact = styled(FontAwesomeIcon)`
  color: #61dafb;
  font-size: 50px;
`;

const Redux = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 50px;
    color: #764ABC;
    margin: 0 0 0 5px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

const BackgroundRedux = styled.div`
  position: absolute;
  top: 0;
  right: -15%;
  z-index: -1;
  width: 115%;
  height: 300px;
  /* display: inline-block; */
  background: #61dafb;    
  border: 1px solid #61dafb;
  transform: skewX(-10deg);
`;

const IconRedux = styled(Icon)`
  font-size: 50px;
  color: #764ABC;
`;

function Banner(){
  return(
    <Wrapper>
      <Hooks>
        <BackgroundHook/>
        <Link to="/react-hooks">
          <IconReact icon={ faReact }/>
          <div>
            <p>Hook</p>
          </div>
        </Link>
      </Hooks>
      <Redux>
        <BackgroundRedux/>
        <Link to="/redux-saga">
          <IconRedux icon={reduxIcon} />
          <div>
            <p>Saga</p>
          </div>
        </Link>
      </Redux>
    </Wrapper>
  )
}

export default Banner;