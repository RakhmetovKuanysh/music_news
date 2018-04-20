import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './Header';
import images from './images';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';


class Artist extends Component {
  render() {
    return (
      <div>
        <Route exact path = {`${this.props.match.path}/:number`} 
          render = {(props) => (<ArtistInfo
          songs = {this.props.songs}
          artists = {this.props.artists}
          albums = {this.props.albums}
          music = {this.props.music} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:number/albums`} 
          render = {(props) => (<ArtistAlbumList
          albums = {this.props.albums} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:number/albums/:album_id`} 
          render = {(props) => (<AlbumInfo
          songs = {this.props.songs}
          albums = {this.props.albums} {...props} />)} />
      </div>
    );
  }
}


class ArtistAlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "albums": [],
      "artist": null,
    }
  }

  componentDidMount() {
    let artist_id = this.props.match.params.number;

    axios.get('http://localhost:8000/api/artists/' + artist_id + '/albums/').then(response => {
      this.setState({
        'albums': response.data,
      });
    });

    axios.get('http://localhost:8000/api/artists/' + artist_id + '/').then(response => {
      this.setState({
        'artist': response.data,
      });
    });
  }

  getDate(date) {
    let myDate = new Date(date);

    var month = myDate.getMonth();
    var year = myDate.getFullYear();

    var month = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"][myDate.getMonth()]
    
    console.log(month);

    return month + ', ' + myDate.getDay() + ' ' + year
  }

  render() {
    let artist_id = this.props.match.params.number;

    let albums = this.state.albums;
    let artist = this.state.artist;

    let artistAlbums = null;

    if(artist == null) {
      return <div></div>;
    }

    if(albums.length > 0) {
      artistAlbums = albums.map(album => 
        <Link to = {`/artist/${artist_id}/albums/${album.id}`} >
          <div className = "col-md-2 artist-album-list-element">
            <img src = {"http://localhost:8000" + album.photo_url} />
            <div>
              <p className = "artist-album-list-title">{album.title}</p>
              <p className = "artist-album-list-date">{this.getDate(album.date)}</p>
            </div>
          </div>
        </Link>
      );
    } else {
      artistAlbums = 
      <div>
        <h3 className = "padding-left">No albums</h3>
      </div>
    }

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
              {artistAlbums}
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

    this.state = {
      "album": null,
      "artist": null,
    }
  }

  componentDidMount() {
    let artist_id = this.props.match.params.number;
    let album_id = this.props.match.params.album_id;

    axios.get('http://localhost:8000/api/albums/' + album_id + '/').then(response => {
      console.log(response.data);
      this.setState({
        'album': response.data,
      });
    });

    axios.get('http://localhost:8000/api/artists/' + artist_id + '/').then(response => {
      this.setState({
        'artist': response.data,
      });
    });
  }

  getDate(date) {
    let myDate = new Date(date);

    var month = myDate.getMonth();
    var year = myDate.getFullYear();

    var month = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"][myDate.getMonth()]
    
    console.log(month);

    return month + ', ' + myDate.getDay() + ' ' + year
  }

  render() {
    let album_id = this.props.match.params.album_id;

    let album = this.state.album;
    let artist = this.state.artist;

    if(album == null || artist == null) {
      return <div></div>
    }

    return (
      <div className = "grey">
        <Header />
        <div className = "container">
          <div className = "album">
            <div className = "col-md-4 album-info-left">
              <img className = "album-info-img" src = {"http://localhost:8000" + album.photo_url} />
            </div>
            <div className = "col-md-8">
              <div className = "artist-songs">
                <h2>{album.title}</h2>
                <p className = "album-info-artist">{artist.name}</p>
                <p className = "album-info-year">{this.getDate(album.date)}</p>
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
      "artist": null,
      "songs": [],
      "albums": [],
      "news": [],
    }

    this.showDescription = this.showDescription.bind(this);
  }

  showDescription() {
    this.setState({
      "show": true,
    })
  }

  componentDidMount() {
    let id = this.props.match.params.number;

    axios.get('http://localhost:8000/api/artists/' + id + '/').then(response => {
      this.setState({
        'artist': response.data,
      });
    });

    axios.get('http://localhost:8000/api/artists/' + id + '/songs/').then(response => {
      this.setState({
        'songs': response.data,
      });
    });

    axios.get('http://localhost:8000/api/artists/' + id + '/albums/').then(response => {
      this.setState({
        'albums': response.data,
      });
    });

    axios.get('http://localhost:8000/api/artists/' + id + '/news/').then(response => {
      this.setState({
        'news': response.data,
      });
    });
  }

  getDate(date) {
    let myDate = new Date(date);

    var month = myDate.getMonth();
    var year = myDate.getFullYear();

    var month = ["January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"][myDate.getMonth()]
    
    console.log(month);

    return month + ', ' + myDate.getDay() + ' ' + year
  }

  render() {
    let id = this.props.match.params.number;
    let artist = this.state.artist;

    if (this.state.artist == null) {
      return <div></div>;
    }
    
    let artistNews = this.state.news.map((t) => (
      <div className = "news-block-element">
        <div className = "tag">
          <Link to = {`/artist/${t.artist_id}`} className = "no-text-dec">
            <p>{artist.name}</p>
          </Link>
        </div>
        <p className = "news-block-title">{t.title}</p>
        <p className = "news-block-datetime">{t.date}</p>
        <p className = "news-block-content">{t.content}</p>
        <img className = "news-block-element-img" src = {"http://localhost:8000" + t.photo_url} />
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


    let artistAlbums = null;

    if(this.state.albums.length == 0) {
      artistAlbums = 
        <div>
          <p className = "padding-left">No albums</p>
        </div>
    } else {
      artistAlbums = this.state.albums.slice(0, 3).map(album =>
        <div className = "col-md-4">
          <img className = "top-album" src = {"http://localhost:8000" + album.photo_url} />
          <div className = "top-album-info">
            <p className = "top-album-info-title">{album.title}</p>
            <p>{this.getDate(album.date)}</p>
          </div>
        </div>
      )
    }


    let artistSongs = null;

    if(this.state.songs.length == 0) {
      artistSongs = <div>
          <p className = "padding-left">No songs</p>
        </div>
    } else {
      artistSongs = this.state.songs.slice(0, 6).map(song => 
        <div className = "artist-info-song-element col-md-6">
          <img src = {"http://localhost:8000" + song.photo_url} />
          <div className = "artist-info-song-title">
            <p className = "top-songs-title">{song.title}</p>
            <p className = "top-songs-artist">{artist.name}</p>
          </div>
        </div>
      )
    }

    return (
      <div className = "grey">
        <Header />
        <div className = "container">
          <div className = "artist">
            <div className = "artist-info">
              <img className = "artist-info-img" src = {"http://localhost:8000" + artist.photo_url} />
              <div className = "margin">
                <p className = "artist-info-name">{artist.name}</p>
                <a href = "https://www.instagram.com/camila_cabello/?hl=ru">
                  <p className = "insta-p">
                    @{artist.name}
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
                  {artistSongs}
                </div>
              </div>
              <div className = "album-info">
                <p className = "artist-info-top-songs-p">Top Albums</p>
                <Link to = {`/artist/${id}/albums`} className = "no-text-dec">
                  <p className = "see-all">See All</p>
                </Link>
                <div className = "album-info-top">
                  {artistAlbums}
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
