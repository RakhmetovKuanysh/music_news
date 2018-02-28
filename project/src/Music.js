import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


class Music extends Component {
  render() {
    let musicList = this.props.music.map((t) => (
        <div className = "news-block-element">
          <div className = "tag">
            <p>{t.artist_id}</p>
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
            <div className = "col-md-4 news-block-right">
              <div className = "sidebar-chart">
                <div className = "sidebar-chart-element">
                  <img src = "https://pbs.twimg.com/profile_images/585405522565799936/XpUcDJT3_400x400.jpg" />
                  <div className = "sidebar-chart-element-desc">
                    <p className = "sidebar-chart-element-name">Billboard Hot 100</p>
                    <p>God's Plan</p>
                    <p>Drake</p>
                  </div>
                </div>
                <div className = "sidebar-chart-element">
                  <img src = "https://images.washingtonpost.com/?op=resize&url=https://s3.amazonaws.com/wapopartners.com/dbknews-wp/wp-content/uploads/2018/01/30014311/migos-culture-2.jpg&mode=crop&w=1200&q=99" />
                  <div className = "sidebar-chart-element-desc">
                    <p className = "sidebar-chart-element-name">Billboard 200</p>
                    <p>Culture</p>
                    <p>Migos</p>
                  </div>
                </div>
                <div className = "sidebar-chart-element">
                  <img src = "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/9a/35/95/9a3595c7-c675-fd74-352f-44e3638ac123/190295851286.jpg/1200x630bb.jpg" />
                  <div className = "sidebar-chart-element-desc">
                    <p className = "sidebar-chart-element-name">Radio Songs</p>
                    <p>Divide</p>
                    <p>Ed Sheeran</p>
                  </div>
                </div>
                <div className = "horizontal-border"></div>
                <div className = "sidebar-vevo">
                  <div className = "sidebar-vevo-video">
                    <a className = "no-text-dec" href = "https://www.youtube.com/watch?v=4uTNVumfm84">
                      <img src = "https://i.ytimg.com/vi/4uTNVumfm84/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD630Jdm1P1UV5_cbNp4xWIs0zE1g" />
                      <p>Maroon 5 - Wait(Offical Video)</p>
                    </a>
                  </div>
                  <div className = "sidebar-vevo-video">
                    <a className = "no-text-dec" href = "https://www.youtube.com/watch?v=kTlv5_Bs8aw">
                      <img src = "https://i.ytimg.com/vi/kTlv5_Bs8aw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCylOLj1HDLgLY2WcT7eKvLQKBRhg" />
                      <p>BTS - Mic Drop(Offical Video)</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Music;
