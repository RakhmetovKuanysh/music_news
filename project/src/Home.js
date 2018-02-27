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
                        <div className = "column-news-left">
                          <img className="image-news-big" src = {images.gs}/>
                          <h3 className = "image-news-big-data">Сборник саундтреков к фильму "Величайший шоумен" остается на вершине
                          британского чарта</h3>
                        </div>
                    </div>
                    <div className = "column-news">
                      <div className = "column-news-right">
                        <div className = "image-container">
                          <img className="image-news" alt = "" src = {images.jt2}/>
                          <div className="image-data">
                            <div className="image-data-text">
                              Джастин Тимберлейк возглавил альбомный чарт США
                            </div>
                          </div>
                        </div>
                        <div className = "image-container">
                          <img className="image-news" alt = "" src = {images.khn}/> 
                          <div className="image-data">
                            <div className="image-data-text">
                              Khalid и Normani записали дуэт ко Дню Всех Влюбленных
                            </div>
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
                          

                          <div className = "billboard-list">
                            <div className = "billboard-list-1">
                              <img className = "billboard-list-1-photo" alt = "" src = {images.drake}/>
                              <div className = "billboard-list-data">
                                <p className = "billboard-list-1-chartname">Billboard Hot 100</p>
                                <p className = "billboard-list-1-songname">God's Plan</p>
                                <p className = "billboard-list-1-singername">Drake</p>
                              </div>
                            </div>

                            <div className = "billboard-list-2">
                              <img className = "billboard-list-2-photo" alt = "" src = {images.migos}/>
                              <div className = "billboard-list-data">
                                <p className = "billboard-list-2-chartname">Billboard 200</p>
                                <p className = "billboard-list-2-songname">Culture</p>
                                <p className = "billboard-list-2-singername">Migos</p>
                              </div>
                            </div>

                            <div className = "billboard-list-3">
                              <img className = "billboard-list-3-photo" alt = "" src = {images.sheeran}/>
                              <div className = "billboard-list-data">
                                <p className = "billboard-list-3-chartname">Radio songs</p>
                                <p className = "billboard-list-3-songname">Perfect</p>
                                <p className = "billboard-list-3-singername">Ed Sheeran</p>
                              </div>
                            </div>


                            <h3 className = "billboard-all-charts">Все чарты</h3>

                          </div>
                      </div>
                  </div>


              </div>
            </div>

        </div>


        <div className = "videos-block">
          <h4 className = "videos-header">Видео</h4>

          <div className = "videos-container">
            <div className = "col-md-4">
              <img className = "video-image-1" src = {images.maroon}/>
              <h3 className = "video-text-1">Maroon 5 - Wait(Official Video)</h3>
            </div>

            <div className = "col-md-4">
              <img className = "video-image-2" src = {images.geazy}/>
              <h3 className = "video-text-2">G-Eazy - No Limit feat. Cardi B(Official Video)</h3>
            </div>

            <div className = "col-md-4">
              <img className = "video-image-3" src = {images.fifthharmony}/>
              <h3 className = "video-text-3">Fifth Harmony - Work from Home ft. Ty Dolla $ign</h3>
            </div>
          </div>

        </div>



        <div className = "wrapper">

          <div className = "music-block">
            <h4 className = "music-block-header">Музыка</h4>
          
            <div className = "music-block-container">
              <div className = "music-news-1">
                <h3 className = "music-news-title">Премьера нового сингла Inna</h3>
                <p className = "music-news-time">три часа назад</p>

                <p className = "music-news-body">
                Официальная обложка нового сингла Инны - "Me Gusta", релиз которого
                ожидается на этой неделе. Песня войдет во вторую часть пятого студийного
                альбома певицы "Nirvana".</p>

                <img className = "music-news-pic-big" src = {images.inna} alt = ""/>
              
                <div className = "actions-container">
                  <div className = "like-button-container">
                    <p className = "like-button-text">Нравится</p>
                    <p className = "like-button-count">169</p>
                  </div>

                  <div className = "comments-button-container">
                    <p className = "comments-button-text">Комментировать</p>
                  </div>
                </div>
              </div>

              <hr className = "divider"/>

              <div className = "music-news-2">
                <h3 className = "music-news-title">"One Call Away" - 500 million</h3>
                <p className = "music-news-time">вчера в 16:38</p>

                <p className = "music-news-body">
                Видеоклип на хит-сингл Чарли Пута - "One Call Away"
                преодолел порог в 500,000,000 просмотров на "YouTube". 
                Это пятое видео исполнителя, достигшее такого результата.</p>

                <div className = "music-news-2-pic-container">
                  <img className = "news-2-pic-1" src = {images.charlie1} alt = ""/>
                  <img className = "news-2-pic-2" src = {images.charlie2} alt = ""/>
                </div>
                <div className = "actions-container">
                  <div className = "like-button-container">
                    <p className = "like-button-text">Нравится</p>
                    <p className = "like-button-count">169</p>
                  </div>

                  <div className = "comments-button-container">
                    <p className = "comments-button-text">Комментировать</p>
                  </div>
                </div>
              </div>

              <hr className = "divider"/>

              <h4 className = "music-block-more">Больше музыки</h4>

            </div>


          </div>


          <div className = "facts-block">
            <h4 className = "facts-block-header">Факты</h4>

            <div className = "facts-block-container">
              <div className = "facts-news-1">
                <h3 className = "facts-news-title">Самые прослушиваемые песни в мировом "Spotify"</h3>
                <p className = "facts-news-time">три часа назад</p>

                <p className = "facts-news-body">
                  Самые прослушиваемые песни в мировом "Spotify" на данный момент:  
                </p>

                <ol>
                    <li>"God's Plan"</li>
                    <li>"All The Stars"</li>
                    <li>"Pray For Me"</li>
                    <li>"rockstar"</li>
                </ol>

                
                <div className = "facts-news-1-images-container">
                    <img className = "facts-news-1-image-1" src = {images.soary}/>
                    <div className = "facts-news-1-images-small-container">
                      <img className = "facts-news-1-images-small-1" src = {images.allthestars}/>
                      <br/>
                      <img className = "facts-news-1-images-small-2" src = {images.pray4me}/>
                      <br/>
                      <img className = "facts-news-1-images-small-3" src = {images.rockstar}/>
                      <br/>
                    </div>

                </div>


                <div className = "actions-container">
                  <div className = "like-button-container">
                    <p className = "like-button-text">Нравится</p>
                    <p className = "like-button-count">169</p>
                  </div>

                  <div className = "comments-button-container">
                    <p className = "comments-button-text">Комментировать</p>
                  </div>
                </div>
              </div>

              <hr className = "divider"/>

              <div className = "facts-news-2">
                <h3 className = "facts-news-title">"One Call Away" - 500 million</h3>
                <p className = "facts-news-time">вчера в 16:38</p>

                <p className = "facts-news-body">
                   Видеоклип на хит-сингл Чарли Пута - "One Call Away"
                  преодолел порог в 500,000,000 просмотров на "YouTube". 
                  Это пятое видео исполнителя, достигшее такого результата.
                </p>

                <img src = {images.charliefact}/>v

                <div className = "actions-container">
                  <div className = "like-button-container">
                    <p className = "like-button-text">Нравится</p>
                    <p className = "like-button-count">169</p>
                  </div>

                  <div className = "comments-button-container">
                    <p className = "comments-button-text">Комментировать</p>
                  </div>
                </div>
              </div>

              <hr className = "divider"/>

              <h4 className = "facts-block-more">Больше фактов</h4>

            </div>
          </div>

        </div>


        <div className = "home-footer">
          <div className = "footer-col-1">
            <h1>ENERGY OF MUSIC</h1>
            <p>Новостной портал о знаменитостях в яркой и сочной подаче. Исключительно
            топовые и перспективные звезды мирового и российского шоу-бизнеса, а также новости
            блогер-, бьюти-, киноиндустрии.</p>
          </div>

          <div className = "footer-col-2">
            <h5>Связь с редакцией</h5>
            <p>По вопросам сотрудничества и предложений:</p>
            <p><a href = "#write">manager@popcake.tv</a></p>

            <h5>По вопросам работы портала:</h5>
            <p><a href = "#write">tech@popcake.tv</a></p>
          </div>

          <div className = "footer-col-3">
            <h5>Подписка на новости</h5>
            <p>Не хочешь пропустить важную новость про кумира? 
            Тогда подпишись на нашу группу ВКонтакте, и мы оповестим тебя о новых материалах!</p>

          </div>
        </div>


      </div>
    );
  }
}

export default Home;
