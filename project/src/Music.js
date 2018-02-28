import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Route, Link } from 'react-router-dom';


class Music extends Component {
  render() {
    let musicList = this.props.music.map((t) => (
      <div className = "news-block-element">
        <div className = "tag">
          <Link to = {`/artist/${t.artist_id}`} className = "no-text-dec">
            <p>{this.props.getArtist(t.artist_id).name}</p>
          </Link>
        </div>
        <p className = "news-block-title">{t.title}</p>
        <p className = "news-block-datetime">{t.date}</p>
        <p className = "news-block-content">{t.content}</p>
        <img className = "news-block-element-img" src = "https://sun9-1.userapi.com/c840635/v840635724/5a006/iVYKFiRgfMU.jpg" />
        <div className = "horizontal-border"></div>
       {/* <img src = {images.like} className = "like-arrow" />*/}
      </div>
    ));

    return (
      <div className = "grey">
        <Header />
        <div className = "news-block">
          <div className = "container news-block-container">
            <div className = "block-header">
              <p>Music</p>
            </div>
            <div className = "col-md-8 news-block-left">
              <div className = "news-block-elements">
                {musicList} 
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Music;
