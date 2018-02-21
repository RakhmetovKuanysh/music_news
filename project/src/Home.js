import React, { Component } from 'react';
import Header from './Header';
import images from './images';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <header className = "masthead">
          <div className = "container banner-container">
            <div className = "intro-text">
              <div className = "intro-lead-in">НОВЫЙ АЛЬБОМ ДЖАСТИНА ТИМБЕРЛЕЙКА</div>
              <div className = "intro-heading text-uppercase">"MAN OF THE WOODS"</div>
              <a className = "btn home-btn js-scroll-trigger" href="#services">
                <p>ПОСЛУШАТЬ</p>
              </a>
            </div>
          </div>
        </header>


        <div className = "wrapper">
            <div className = "news">
              <h4 className = "news-header">Новости</h4>
              
              <div className = "news-grid">
                  <div className = "row-news">
                    <div className = "column-news">
                      <div className = "image-container">
                        <img className="image-news" alt = "" src = {images.gs}/>
                        <div className="image-data">
                          <div className="image-data-text">
                            John Doe
                          </div>
                        </div>
                      </div>
                      <div className = "image-container">
                        <img className="image-news" alt = "" />
                        <div className="image-data">
                          <div className="image-data-text">
                            John Doe
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className = "column-news">
                      <div className = "image-container">
                        <img className="image-news" alt = "" src = {images.jt2}/>
                        <div className="image-data">
                          <div className="image-data-text">
                            John Doe
                          </div>
                        </div>
                      </div>
                      <div className = "image-container">
                        <img className="image-news" alt = "" src = {images.khn}/> 
                        <div className="image-data">
                          <div className="image-data-text">
                            John Doe
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

                
            <div className = "charts">
              <h4 className = "charts-header">Чарты</h4>
                  
              <div className = "charts-grid">
                  <div className = "row-charts">
                      <div className = "column-charts-left">
                          <img className = "image-charts-big" alt = "" src = {images.soary}/>
                          <div className = "column-charts-left-data">
                              <p className = "column-charts-left-data-chart-name">Spotify Top 200</p>
                              <p className = "column-charts-left-data-singer-name">Drake</p>
                              <p className = "column-charts-left-data-song-name">God's Plan</p>
                          </div>
                      </div>

                      <div className = "column-charts-right">
                          <h4 className = "billboard-header">Billboard</h4>
                      </div>
                  </div>


              </div>
            </div>

        </div>




      </div>
    );
  }
}

export default Home;
