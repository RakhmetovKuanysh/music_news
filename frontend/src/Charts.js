import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BillboardHot100 from './BillboardHot100';
import Billboard200 from './Billboard200';
import RadioSongs from './RadioSongs';
import AppleMusicTop100 from './AppleMusicTop100';
import Spotify200 from './Spotify200';
import Header from './Header';
import ChartsList from './ChartsList';


class Charts extends Component {
  render() {
    return (
      <div>
        <Route exact path = {`${this.props.match.path}`} component = {ChartsList} />
        <Route path = {`${this.props.match.path}/billboard_hot_100`} component = {BillboardHot100} />
        <Route path = {`${this.props.match.path}/billboard_200`} component = {Billboard200} />
        <Route path = {`${this.props.match.path}/radio_songs`} component = {RadioSongs} />
        <Route path = {`${this.props.match.path}/apple_music_top_100`} component = {AppleMusicTop100} />
        <Route path = {`${this.props.match.path}/spotify_200`} component = {Spotify200} />
      </div>
    );
  }
}

export default Charts;
