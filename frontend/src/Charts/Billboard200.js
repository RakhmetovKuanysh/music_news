import React, { Component } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Sidebar from '../Sidebar';


class Billboard200 extends Component {
  constructor() {
    super();

    this.state = {
      "songs": [
        {
          "id": 1,
          "title_id": "God's Plan",
          "singer_id": "Drake",
          "img": "https://charts-static.billboard.com/img/2018/01/drake-zwl.jpg",
        },
        {
          "id": 2,
          "title_id": "Perfect",
          "singer_id": "Ed Sheeran",
          "img": "https://images.shazam.com/artistart/a40769350_s400.jpg",
        },
        {
          "id": 3,
          "title_id": "Finesse",
          "singer_id": "Bruno Mars & Cardi B",
          "img": "https://charts-static.billboard.com/img/2018/01/bruno-mars-va7.jpg",
        },
        {
          "id": 4,
          "title_id": "Havana",
          "singer_id": "Camila Cabello Featuring Young Thug",
          "img": "http://spotifypresave.camilacabello.com/img/camila-mobile.jpg",
        },
        {
          "id": 5,
          "title_id": "Sorry Not Sorry",
          "singer_id": "Demi Lovato",
          "img": "https://charts-static.billboard.com/img/2017/07/demi-lovato-rh9.jpg",
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className = "container white-container">
          <div className = "charts-header">
            <h1>Billboard 200</h1>
          </div>
          <div className = "charts-date">
            <p className = "week-of">THE WEEK OF</p>
            <p className = "charts-date-day">MARCH 1</p>
          </div>
          <div className = "all-charts-list col-md-8">
            { this.state.songs.map((song, index) => 
              <div className = "width100">
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
                <div className = "horizontal-border"></div>
              </div>
            )}
          </div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Billboard200;
