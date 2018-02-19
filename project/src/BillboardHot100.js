import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


class BillboardHot100 extends Component {
  constructor() {
    super();

    this.state = {
      "songs": [
        {
          "id": 1,
          "title_id": 1,
          "singer_id": 1,
          "img": "https://www.apple.com/autopush/us/itunes/charts/songs/images/2018/2/686270778cdd92993e2d47c554dab268b1795ca16b68d808589d6acf47d2e31b_2x.jpg",
        },
        {
          "id": 2,
          "title_id": 2,
          "singer_id": 2,
          "img": "https://www.apple.com/autopush/us/itunes/charts/songs/images/2018/2/686270778cdd92993e2d47c554dab268b1795ca16b68d808589d6acf47d2e31b_2x.jpg",
        },
        {
          "id": 3,
          "title_id": 3,
          "singer_id": 3,
          "img": "https://www.apple.com/autopush/us/itunes/charts/songs/images/2018/2/686270778cdd92993e2d47c554dab268b1795ca16b68d808589d6acf47d2e31b_2x.jpg",
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className = "container">
          <div className = "charts-header">
            <h1>Billboard Hot 100</h1>
          </div>
          <div className = "all-charts-list">
            { this.state.songs.map((song, index) => 
              <div key = {song.id} className = "chart-element">
                <div className = "chart-element-index">
                  <p >{index+1}</p>
                </div>
                <Link to = {`/artist/${song.singer_id}/songs/${song.id}`}>
                  <img src = {song.img} className = "chart-element-img"/>
                </Link>
                <div className = "chart-element-description">
                  <p className = "chart-element-title">{song.title_id}</p>
                  <Link to = {`/artist/${song.singer_id}`}>
                    <p className = "chart-element-artist">{song.singer_id}</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BillboardHot100;
