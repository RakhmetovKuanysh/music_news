import React, { Component } from 'react';
import Header from './Header';


class News extends Component {
  render() {
    return (
      <div className = "grey">
        <Header />
        <div className = "news-block">
          <div className = "container news-block-container">
            <div className = "block-header">
              <p>Новости</p>
            </div>
            <div className = "col-md-8 news-block-left">
              <div className = "news-block-elements">
                <div className = "news-block-element">
                  <p className = "news-block-title">Альбом Камилы Кабелло «Camila» получил платиновую сертификацию в Бразилии</p>
                  <p className = "news-block-datetime">три часа назад</p>
                  <p className = "news-block-content">Альбом Камилы Кабелло «Camila» получил платиновую сертификацию в Бразилии. Продажи преодолели порог в 40,000 копий.</p>
                  <img className = "news-block-element-img" src = "https://sun9-1.userapi.com/c840635/v840635724/5a006/iVYKFiRgfMU.jpg" />
                  <div className = "horizontal-border"></div>
                 {/* <img src = {images.like} className = "like-arrow" />*/}
                </div>  
                <div className = "news-block-element">
                  <p className = "news-block-title">"OMG" Камилы имеет более 100 000 000 прослушиваний на Spotify</p>
                  <p className = "news-block-datetime">три часа назад</p>
                  <p className = "news-block-content">«OMG» Камилы Кабелло, записанная совместно с Quavo, теперь имеет более 100 000 000 прослушиваний на Spotify. Это седьмая композиция певицы, достигшая такого результата.</p>
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
                    <p>God's Plan</p>
                  </div>
                </div>
                <div className = "sidebar-chart-element">
                  <img src = "https://images.washingtonpost.com/?op=resize&url=https://s3.amazonaws.com/wapopartners.com/dbknews-wp/wp-content/uploads/2018/01/30014311/migos-culture-2.jpg&mode=crop&w=1200&q=99" />
                  <div className = "sidebar-chart-element-desc">
                    <p className = "sidebar-chart-element-name">Billboard 200</p>
                    <p>God's Plan</p>
                    <p>God's Plan</p>
                  </div>
                </div>
                <div className = "sidebar-chart-element">
                  <img src = "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/9a/35/95/9a3595c7-c675-fd74-352f-44e3638ac123/190295851286.jpg/1200x630bb.jpg" />
                  <div className = "sidebar-chart-element-desc">
                    <p className = "sidebar-chart-element-name">Radio Songs</p>
                    <p>God's Plan</p>
                    <p>God's Plan</p>
                  </div>
                </div>
                <div className = "horizontal-border"></div>
                <div className = "sidebar-vevo">
                  <div>
                    <img src = "https://i.ytimg.com/vi/4uTNVumfm84/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD630Jdm1P1UV5_cbNp4xWIs0zE1g" />
                    <p>Maroon 5 - Wait(Offical Video)</p>
                  </div>
                  <div>
                    <img src = "https://i.ytimg.com/vi/kTlv5_Bs8aw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCylOLj1HDLgLY2WcT7eKvLQKBRhg" />
                    <p>BTS - Mic Drop(Offical Video)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
