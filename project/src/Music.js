import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


class Music extends Component {
  render() {
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
                <div className = "news-block-element">
                  <div className = "tag">
                    <p>CAMILA CABELLO</p>
                  </div>
                  <p className = "news-block-title">Camila Cabello’s first album hit 1bn streams last week</p>
                  <p className = "news-block-datetime">three hours ago</p>
                  <p className = "news-block-content">Last week, the album had its billionth stream. 
                    It only came out last month. “That’s insane,” she says. When we went to press, 
                    Havana was the 47th most streamed song of all time on Spotify. “That’s crazy,”
                    she says, genuinely startled. My favourite stat is that fans have spent 15,397
                    years listening to Cabello’s summery, part-Latino, part-house pop music on 
                    Spotify. “How many?” Fifteen thousand, three hundred and ninety-seven. “That’s
                    insane.” Camila went to No 1 in 99 countries and, to put it in context, she
                    was listened to more in 2017 than Harry Styles.</p>
                  <img className = "news-block-element-img" src = "https://sun9-1.userapi.com/c840635/v840635724/5a006/iVYKFiRgfMU.jpg" />
                  <div className = "horizontal-border"></div>
                 {/* <img src = {images.like} className = "like-arrow" />*/}
                </div>  
                <div className = "news-block-element">
                  <div className = "tag">
                    <p>CAMILA CABELLO</p>
                  </div>
                  <p className = "news-block-title">Camila Cabello Reaches One Billion Spotify Streams with 'Camila'</p>
                  <p className = "news-block-datetime">yesterday at 16:48</p>
                  <p className = "news-block-content">Camila's critically acclaimed self-titled debut has been a 
                    Spotify hit ever since it was released in January.  Not only have all of its singles performed 
                    well but its album tracks including 'Inside Out', 'In the Dark' and 'Into It' have all surpassed
                    10 million streams. Not to mention standout cut 'She Loves Control' has been streamed 37 
                    million times on the platform.</p>
                  <img className = "news-block-element-img" src = "https://pp.userapi.com/c841527/v841527546/709f8/bZBGwF7USbU.jpg" />
                  <div className = "horizontal-border"></div>
                 {/* <img src = {images.like} className = "like-arrow" />*/}
                </div>  
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
                    <img src = "https://i.ytimg.com/vi/4uTNVumfm84/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD630Jdm1P1UV5_cbNp4xWIs0zE1g" />
                    <p>Maroon 5 - Wait(Offical Video)</p>
                  </div>
                  <div className = "sidebar-vevo-video">
                    <img src = "https://i.ytimg.com/vi/kTlv5_Bs8aw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCylOLj1HDLgLY2WcT7eKvLQKBRhg" />
                    <p>BTS - Mic Drop(Offical Video)</p>
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
