import React, { useState } from 'react';
import { connect, /*useSelector, useDispatch*/  } from 'react-redux'
import * as type from '../../redux/type/type';

import Banner from '../../components/Banner';
import TodoApp from '../../components/TodoApp';
import ContentSection from '../../components/ContentSection'; 

function Home(props){

  return(
    <div>
      <Banner/>
      {/* <TodoApp/> */}
      <ContentSection/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    test: state.test.data,
    show: state.test.isShow,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);