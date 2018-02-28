import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';


class BillboardHot100 extends Component {
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
        <div className = "container">
          <div className = "charts-header">
            <h1>Billboard Hot 100</h1>
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
        <Footer />
      </div>
    );
  }
}

export default BillboardHot100;
