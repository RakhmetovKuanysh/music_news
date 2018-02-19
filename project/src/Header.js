import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className = "header-container">
          <div className = "header-main">
          </div>
          <div className = "header-menu">
              <Link to={`/music`}><p className = "header-p">МУЗЫКА</p></Link>
              <Link to={`/video`}><p className = "header-p">ВИДЕО</p></Link>
              <Link to={`/news`}><p className = "header-p">НОВОСТИ</p></Link>
              <Link to={`/charts`}><p className = "header-p">ЧАРТЫ</p></Link>
              <Link to={`/facts`}><p className = "header-p">ФАКТЫ</p></Link>
          </div>
          <div>
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
