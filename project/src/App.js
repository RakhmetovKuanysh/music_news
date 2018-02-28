import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Music from './Music';
import News from './News';
import Video from './Video';
import Charts from './Charts';
import Artist from './Artist';


class App extends Component {
  constructor() {
    super();

    this.state = {
      "music": [
        {
          "id": 1,
          "title": "Camila Cabello’s first album hit 1bn streams last week",
          "artist_id": "Camila Cabello",
          "date": "three hours ago",
          "content": "Last week, the album had its billionth stream. It only came out last month. “That’s insane,” she says. When we went to press, Havana was the 47th most streamed song of all time on Spotify. “That’s crazy,”she says, genuinely startled. My favourite stat is that fans have spent 15,397 years listening to Cabello’s summery, part-Latino, part-house pop music on Spotify. “How many?” Fifteen thousand, three hundred and ninety-seven. “That’s insane.” Camila went to No 1 in 99 countries and, to put it in context, she was listened to more in 2017 than Harry Styles.",
          "img": "https://sun9-1.userapi.com/c840635/v840635724/5a006/iVYKFiRgfMU.jpg",
        }
      ],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path = '/' component = {Home} />
          <Route path = '/music' render={(props) => (<Music music={this.state.music}/> )} />
          <Route path = '/video' component = {Video} />
          <Route path = '/news' component = {News} />
          <Route path = '/charts' component = {Charts} />
          <Route path = '/artist' component = {Artist} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
