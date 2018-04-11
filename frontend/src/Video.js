import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


class Video extends Component {
  constructor(props) {
    super(props);
  }

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
        <img className = "news-block-element-img" src = {t.img} />
        <div className = "horizontal-border"></div>
       {/* <img src = {images.like} className = "like-arrow" />*/}
      </div>
    ));

    return (
      <div className = "grey">
        <Header />
        <div className = "video-banner">
          <div className = "video-banner-elements">
            <div className = "col-md-7 video-banner-element">
              <img src = "https://i.ytimg.com/vi/aqVW8DXacTs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUBC73mbmXWmsu6NdbmOAP7X4H_A" />
              <p>Самое просматриваемое видео</p>
            </div>
            <div className = "col-md-5">
              <div className = "video-banner-element">
                <img src = "https://i.ytimg.com/vi/aqVW8DXacTs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUBC73mbmXWmsu6NdbmOAP7X4H_A" />
                <p>Самое просматриваемое видео</p>
              </div>
              <div className = "video-banner-element">
                <img src = "https://i.ytimg.com/vi/aqVW8DXacTs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUBC73mbmXWmsu6NdbmOAP7X4H_A" />
                <p>Самое просматриваемое видео</p>
              </div>
            </div>
          </div>
        </div>
        <div className = "news-block">
          <div className = "container news-block-container">
            <div className = "block-header">
              <p>Video</p>
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

export default Video;
