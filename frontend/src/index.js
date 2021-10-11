import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import ClosetItems from './components/closet';
import FrontPage from './components/frontPage';
import OutfitsCreation from './components/outfitsCreation';
import OutfitsView from './components/outfitsView';
import CalendarView from './components/calendar';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path="/closet" component={ClosetItems} />
        <Route path="/outfits" component={OutfitsCreation} />
        <Route path="/outfits-view" component={OutfitsView} />
        {/* <Route path="/calendar" component={CalendarView} /> */}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
