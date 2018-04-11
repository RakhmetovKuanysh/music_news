import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';


class ChartsList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className = "container white-container">
          <div className = "charts-header">
            <h1>CHARTS</h1>
          </div>
          <div className = "charts-date">
            <p className = "week-of">THE WEEK OF</p>
            <p className = "charts-date-day">MARCH 1</p>
          </div>
          <div className = "all-charts-list col-md-8">
            <Link className = "no-text-dec" to = "/charts/billboard_hot_100">
              <div className = "row">
                <div className = "col-md-12 charts-list-element">
                  <div className = "col-md-4">
                    <img src = "https://lastfm-img2.akamaized.net/i/u/770x0/351ba198b5e5b4f43c151e2b30b7074b.jpg" />
                  </div>
                  <div className = "col-md-8">
                    <p>Billboard Hot 100</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className = "horizontal-border"></div>
            <Link className = "no-text-dec" to = "/charts/billboard_200">
              <div className = "row">
                <div className = "col-md-12 charts-list-element">
                  <div className = "col-md-4">
                    <img src = "https://lastfm-img2.akamaized.net/i/u/770x0/cd58c778da718e2809d6ef572b378ba8.jpg" />
                  </div>
                  <div className = "col-md-8">
                    <p>Billboard 200</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className = "horizontal-border"></div>
            <Link className = "no-text-dec" to = "/charts/spotify_200">
              <div className = "row">
                <div className = "col-md-12 charts-list-element">
                  <div className = "col-md-4">
                    <img src = "https://scontent-frt3-2.cdninstagram.com/vp/b06ba4f34e5f688032767cf6cd6950fa/5B0450A2/t51.2885-15/e35/28152172_143807929766708_6841736276639481856_n.jpg" />
                  </div>
                  <div className = "col-md-8">
                    <p>Spotify 200</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className = "horizontal-border"></div>
            <Link className = "no-text-dec" to = "/charts/radio_songs">
              <div className = "row">
                <div className = "col-md-12 charts-list-element">
                  <div className = "col-md-4">
                    <img src = "https://lastfm-img2.akamaized.net/i/u/770x0/8109f7357058635aebc5ebe4bf1adbec.jpg" />
                  </div>
                  <div className = "col-md-8">
                    <p>Radio Songs</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className = "horizontal-border"></div>
            <Link className = "no-text-dec" to = "/charts/apple_music_top_100">
              <div className = "row">
                <div className = "col-md-12 charts-list-element">
                  <div className = "col-md-4">
                    <img src = "https://images-na.ssl-images-amazon.com/images/I/A1g6mURqZdL._SX770_.jpg" />
                  </div>
                  <div className = "col-md-8">
                    <p>Apple Music Top 100</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className = "horizontal-border"></div>
          </div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ChartsList;
