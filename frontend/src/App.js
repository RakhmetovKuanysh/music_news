import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Music from './Music';
import Artists from './Artists';
import Video from './Video';
import Charts from './Charts/Charts';
import Artist from './Artist';
import Admin from './Admin/Admin';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      "music": [],
      "artists": [],
      "albums": [],
    };

    this.addMusicNews = this.addMusicNews.bind(this);
    this.addArtist = this.addArtist.bind(this);
    this.addAlbum = this.addAlbum.bind(this);
    this.editAlbum = this.editAlbum.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/news/').then(response => {
      this.setState({
        "music": response.data
      });
    });

    axios.get('http://localhost:8000/api/artists/').then(response => {
      this.setState({
        "artists": response.data,
      });
    });

    axios.get('http://localhost:8000/api/albums/').then(response => {
      this.setState({
        "albums": response.data,
      });
    });
  }

  editAlbum(id, title, artist_id, date, img) {
    let albums = this.state.albums;
    let album = albums.find(al => al.id == id);

    album.title = title;
    album.artist_id = artist_id;
    album.date = date;
    album.img = img;

    this.setState({
      "albums": albums,
    })
  }

  addMusicNews(text, title, artist_id, img) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ]; // constants

    let date = new Date();

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    let dateStr = day + ' ' + monthNames[monthIndex] + ' ' + year;

    console.log(dateStr);

    let news = {
      "id": this.state.musicCnt,
      "content": text,
      "title": title,
      "date": dateStr,
      "artist_id": artist_id,
      "img": img,
    };

    let music = this.state.music;
    music.push(news);

    this.setState({
      "music": music,
      "musicCnt": this.state.musicCnt + 1,
    });

    console.log(this.state.music);
  }

  addArtist(name, description, genre, img) {
    let artist = {
      "id": this.state.artistCnt,
      "description": description,
      "name": name,
      "genre": genre,
      "img": img,
    };

    let artists = this.state.artists;
    artists.push(artist);

    this.setState({
      "artists": artists,
      "artistCnt": this.state.artistCnt + 1,
    });

    console.log(artists);
  }

  addAlbum(title, artist_id, img, date) {
    let album = {
      "id": this.state.albumCnt,
      "title": title,
      "artist_id": artist_id,
      "date": date,
      "img": img,
    };

    let albums = this.state.albums;
    albums.push(album);

    this.setState({
      "albums": albums,
      "albumCnt": this.state.albumCnt + 1,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path = '/' component = {Home} />
          <Route path = '/music' render = {(props) => (<Music 
            music = {this.state.music} {...props} />)} />
          <Route path = '/video' render = {(props) => (<Video 
            music = {this.state.music}
            getArtist = {this.getArtist} {...props} />)} />
          <Route path = '/artists' render = {(props) => (<Artists 
            music = {this.state.music}
            artists = {this.state.artists} {...props} />)} />
          <Route path = '/charts' component = {Charts} />
          <Route path = '/artist' render = {(props) => (<Artist
            artists = {this.state.artists}
            music = {this.state.music} {...props} />)} />
          <Route path = '/admin' render = {(props) => (<Admin
            songs = {this.state.songs}
            artists = {this.state.artists}
            albums = {this.state.albums}
            music = {this.state.music}
            addArtist = {this.addArtist}
            editAlbum = {this.editAlbum}
            addAlbum = {this.addAlbum}
            addMusicNews = {this.addMusicNews} {...props} />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
