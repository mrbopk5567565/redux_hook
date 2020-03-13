import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Hooks from './pages/Hooks';
import ReduxSaga from './pages/ReduxSaga';
import Giphy from './pages/Giphy';
import GiphyDetail from './pages/GiphyDetail';
import PageNotFound from './pages/PageNotFound';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/react-hooks" component={ Hooks } />
            <Route path="/redux-saga" component={ ReduxSaga } />
            <Route path="/giphy" component={ Giphy } />
            <Route path="/giphy-detail/:id" component={ GiphyDetail } />
            <Route component={ PageNotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
