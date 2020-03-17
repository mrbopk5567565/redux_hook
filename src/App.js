import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hooks from './pages/Hooks';
import ReduxSaga from './pages/ReduxSaga';
import Giphy from './pages/Giphy';
import GiphyDetail from './pages/GiphyDetail';
import MaterialUI from './pages/MaterialUI';
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
            <Route path="/material-ui" component={ MaterialUI } />
            <Route component={ PageNotFound } />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
