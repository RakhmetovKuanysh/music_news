import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';


class Header extends Component {
  render() {
    return (
      <div>
        <div className = "header-container">
          <div className = "header-menu">
              <Link to={`/music`} className = "no-text-dec"><p className = "header-p">MUSIC</p></Link>
              <Link to={`/video`} className = "no-text-dec"><p className = "header-p">VIDEO</p></Link>
              <div className = "main-logo">
                <img src = {images.logo} />
              </div>
              <Link to={`/news`} className = "no-text-dec"><p className = "header-p">NEWS</p></Link>
              <Link to={`/charts`} className = "no-text-dec"><p className = "header-p">CHARTS</p></Link>
          </div>
          <div className = "login-btn">
            <a><span className="glyphicon glyphicon-log-in header-login"></span></a>
          </div>
        </div>
        <div className = "charts-list">
          <Link to={`/charts/billboard_hot_100`} className = "no-text-dec">
            <p className = "charts-p">Billboard Hot 100</p>
          </Link>
          <Link to={`/charts/billboard_200`} className = "no-text-dec">
            <p className = "charts-p">Billboard 200</p>
          </Link>
          <Link to={`/charts/billboard_200`} className = "no-text-dec">
            <p className = "charts-p">Radio Songs</p>
          </Link>
          <Link to={`/charts/apple_music_top_100`} className = "no-text-dec">
            <p className = "charts-p">Apple Music Top 100</p>
          </Link>
          <Link to={`/charts/spotify_200`} className = "no-text-dec">
            <p className = "charts-p">Spotify 200</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
