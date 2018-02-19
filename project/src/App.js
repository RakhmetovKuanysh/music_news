import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Music from './Music';
import News from './News';
import Video from './Video';
import Charts from './Charts';
import Facts from './Facts';
import Artist from './Artist';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path = '/' component = {Home} />
          <Route path = '/music' component = {Music} />
          <Route path = '/video' component = {Video} />
          <Route path = '/facts' component = {Facts} />
          <Route path = '/news' component = {News} />
          <Route path = '/charts' component = {Charts} />
          <Route path = '/artist' component = {Artist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
