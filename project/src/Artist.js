import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import BillboardHot100 from './BillboardHot100';
import Header from './Header';
import ChartsList from './ChartsList';
import images from './images';


class Artist extends Component {
  render() {
    return (
      <div>
        <Route exact path = {`${this.props.match.path}/:number`} component = {ArtistInfo} />
      </div>
    );
  }
}


class ArtistInfo extends Component {
  render() {
    return (
      <div className = "grey">
        <Header />
        <div className = "container">
          <div className = "artist">
            <div className = "artist-info">
              <img className = "artist-info-img" src = "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/70/c4/04/70c40430-1a20-51fc-f1b7-8d695b255051/source/438x438sr.jpg" />
              <div className = "margin">
                <p className = "artist-info-name">Camila Cabello</p>
                <a href = "https://www.instagram.com/camila_cabello/?hl=ru">
                  <p className = "insta-p">
                    @camila_cabello
                  </p>
                </a>
              </div>
              <div className = "artist-info-desc">
                <p>Camila Cabello was born in Cuba on March 3, 1997. 
                By the time she was five years old, Cabello had lived 
                in Havana and Mexico, before relocating to the US. Cabello
                auditioned for The X Factor in North Carolina. She first 
                auditioned for the producers' part of the audition and got
                the call back saying that she will audition for the judges
                as an alternative, meaning that if after the show, if
                they were to have time, she would be able to audition.
                She was given four “yeses” and allowed to move on to the 
                competition. Eventually, she, along with read more </p>
              </div>
              <div className = "like-comment-block">
                <img src = {images.like} className = "like-arrow" />
                <p className = "like-comment-block-p">120</p>
              </div>
            </div>
            <div className = "artist-info-songs-and-albums">
              <div className = "artist-songs">
                <p className = "artist-info-top-songs-p">Top Songs</p>
                <div className = "artist-info-songs">
                  <div className = "artist-info-song-element col-md-6">
                    <img src = "https://vignette.wikia.nocookie.net/karlacamilacabello/images/0/0a/Camila-cabello-crying-in-the-club.jpg/revision/latest?cb=20170516231506" />
                    <div className = "artist-info-song-title">
                      <p className = "top-songs-title">Crying In The Club</p>
                      <p className = "top-songs-artist">Camila Cabello</p>
                    </div>
                  </div>
                  <div className = "artist-info-song-element col-md-6">
                    <img src = "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/32/53/40/325340a2-c77e-777d-c391-64ed74434f2d/886446870298.jpg/146x0w.jpg" />
                    <div className = "artist-info-song-title">
                      <p className = "top-songs-title">Crying In The Club</p>
                      <p className = "top-songs-artist">Camila Cabello</p>
                    </div>
                  </div>
                  <div className = "artist-info-song-element col-md-6">
                    <img src = "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b2/65/33/b2653305-0fe5-587b-564d-400f6591b003/886446820569.jpg/146x0w.jpg" />
                    <div className = "artist-info-song-title">
                      <p className = "top-songs-title">Crying In The Club</p>
                      <p className = "top-songs-artist">Camila Cabello</p>
                    </div>                  
                  </div>
                  <div className = "artist-info-song-element col-md-6">
                    <img src = "https://is1-ssl.mzstatic.com/image/thumb/Music82/v4/7b/82/24/7b8224f6-b9dc-5b42-a882-66c7d9689df6/886446506159.jpg/292x0w.jpg" />
                    <div className = "artist-info-song-title">
                      <p className = "top-songs-title">Crying In The Club</p>
                      <p className = "top-songs-artist">Camila Cabello</p>
                    </div>         
                  </div>
                  <div className = "artist-info-song-element col-md-6">
                    <img src = "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/8d/bb/00/8dbb00f0-cd79-5f5d-400d-cf49919d04ab/886446672960.jpg/292x0w.jpg" />
                    <div className = "artist-info-song-title">
                      <p className = "top-songs-title">Crying In The Club</p>
                      <p className = "top-songs-artist">Camila Cabello</p>
                    </div>                
                  </div>
                  <div className = "artist-info-song-element col-md-6">
                    <img src = "https://img.discogs.com/omoUouDts9fYk440Kf8p1TuS6WU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-11386038-1515369252-9728.png.jpg" />
                    <div className = "artist-info-song-title">
                      <p className = "top-songs-title">Crying In The Club</p>
                      <p className = "top-songs-artist">Camila Cabello</p>
                    </div>            
                  </div>
                </div>
              </div>
              <div className = "album-info">
                <p className = "artist-info-top-songs-p">Top Albums</p>
                <div className = "album-info-top">
                  <div className = "col-md-4">
                    <img className = "top-album" src = "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/32/53/40/325340a2-c77e-777d-c391-64ed74434f2d/886446870298.jpg/146x0w.jpg" />
                    <div>
                      <p>Camila</p>
                      <p>2018</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Artist;
