import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import BillboardHot100 from './BillboardHot100';
import Header from './Header';
import ChartsList from './ChartsList';
import images from './images';
import Sidebar from './Sidebar';
import Footer from './Footer';


class Artist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path = {`${this.props.match.path}/:number`} 
          render = {(props) => (<ArtistInfo
          songs = {this.props.songs}
          artists = {this.props.artists}
          albums = {this.props.albums}
          music = {this.props.music}
          getArtist = {this.props.getArtist} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:number/album`} 
          render = {(props) => (<ArtistAlbumList
          albums = {this.props.albums}
          getArtist = {this.props.getArtist} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:number/album/:album_id`} 
          render = {(props) => (<AlbumInfo
          songs = {this.props.songs}
          albums = {this.props.albums}
          getArtist = {this.props.getArtist} {...props} />)} />
      </div>
    );
  }
}


class ArtistAlbumList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let artist_id = this.props.match.params.number;
    let artist = this.props.getArtist(artist_id);

    let albums = this.props.albums.filter(t => t.artist_id == artist_id);

    return (
      <div className = "grey">
        <Header />
        <div className = "artist-albums">
          <div className = "container white">
            <h1>
              {artist.name} - Albums
            </h1>
            <div className = "horizontal-border"></div>
            <div className = "artist-album-list">
              {albums.map(album => 
                <Link to = {`/artist/${artist_id}/album/${album.id}`} >
                  <div className = "col-md-2 artist-album-list-element">
                    <img src = {album.img} />
                    <div>
                      <p className = "artist-album-list-title">{album.title}</p>
                      <p className = "artist-album-list-date">{album.date}</p>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


class AlbumInfo extends Component {
  constructor(props) {
    super(props);

    console.log(props.match.params);
  }

  render() {
    let id = this.props.match.params.number;
    let artist = this.props.getArtist(id);
    let album_id = this.props.match.params.album_id;

    let album = this.props.albums.filter(t => t.id == album_id)[0];
    console.log(album);

    return (
      <div className = "grey">
        <Header />
        <div className = "container">
          <div className = "album">
            <div className = "col-md-4 album-info-left">
              <img className = "album-info-img" src = {album.img} />
            </div>
            <div className = "col-md-8">
              <div className = "artist-songs">
                <h2>{album.title}</h2>
                <p className = "album-info-artist">{artist.name}</p>
                <p className = "album-info-year">{album.date}</p>
                <div className = "album-info-songs">
                  <div className = "horizontal-border"></div>
                  <div>
                    <p className = "album-info-table-title">Title</p>
                  </div>
                  <div className = "horizontal-border"></div>
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


class ArtistInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "show": false,
    }

    console.log(props.match.params);
    this.showDescription = this.showDescription.bind(this);
  }

  showDescription() {
    this.setState({
      "show": true,
    })
  }

  render() {
    let id = this.props.match.params.number;
    let artist = this.props.getArtist(id);

    let artistNews = this.props.music.filter(t => t.artist_id == id).map((t) => (
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

    let description = null;

    if(!this.state.show) {
      let trStr = artist.description.split(/\s+/).slice(0,120).join(" ");
      description = 
        <div>
          <p>{trStr}</p>
          <p onClick = {this.showDescription} className = "read-more">read more</p>
        </div>;
    } else {
      description = <p>{artist.description}</p>;
    }

    return (
      <div className = "grey">
        <Header />
        <div className = "container">
          <div className = "artist">
            <div className = "artist-info">
              <img className = "artist-info-img" src = {artist.img} />
              <div className = "margin">
                <p className = "artist-info-name">{artist.name}</p>
                <a href = "https://www.instagram.com/camila_cabello/?hl=ru">
                  <p className = "insta-p">
                    @camila_cabello
                  </p>
                </a>
              </div>
              <div className = "artist-info-desc">
                {description}
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
                  {this.props.songs.filter(t => t.artist_id == id).slice(0, 6).map(song => 
                    <div className = "artist-info-song-element col-md-6">
                      <img src = {song.img} />
                      <div className = "artist-info-song-title">
                        <p className = "top-songs-title">{song.title}</p>
                        <p className = "top-songs-artist">{artist.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className = "album-info">
                <p className = "artist-info-top-songs-p">Top Albums</p>
                <Link to = {`/artist/${id}/album`} className = "no-text-dec">
                  <p className = "see-all">See All</p>
                </Link>
                <div className = "album-info-top">
                  {this.props.albums.filter(t => t.artist_id == id).slice(0, 3).map(album =>
                    <div className = "col-md-4">
                      <img className = "top-album" src = {album.img} />
                      <div className = "top-album-info">
                        <p className = "top-album-info-title">{album.title}</p>
                        <p>{album.date}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "news-block">
          <div className = "container news-block-container">
            <div className = "block-header">
              <p>News about {artist.name}</p>
            </div>
            <div className = "col-md-8 news-block-left">
              <div className = "news-block-elements">
                {artistNews} 
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

export default Artist;
