import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminMusic from './AdminMusic';
import AddMusicNews from './AddMusicNews';
import AddArtist from './AddArtist';
import AdminArtist from './AdminArtist';
import AdminAlbum from './AdminAlbum';
import AddAlbum from './AddAlbum';


class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path = {`${this.props.match.path}`} 
          render = {(props) => (<AdminMusic
          artists = {this.props.artists}
          music = {this.props.music} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/music`} 
          render = {(props) => (<AdminMusic
          artists = {this.props.artists}
          music = {this.props.music}
          getArtist = {this.props.getArtist}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/music/add_new`} 
          render = {(props) => (<AddMusicNews
          artists = {this.props.artists}
          addMusicNews = {this.props.addMusicNews}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/artists`} 
          render = {(props) => (<AdminArtist
          artists = {this.props.artists}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/artists/add_new`} 
          render = {(props) => (<AddArtist
          addArtist = {this.props.addArtist}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/albums`} 
          render = {(props) => (<AdminAlbum
          albums = {this.props.albums}
          artists = {this.props.artists}
          editAlbum = {this.props.editAlbum}
          getArtist = {this.props.getArtist}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/albums/add_new`} 
          render = {(props) => (<AddAlbum
          addAlbum = {this.props.addAlbum}
          artists = {this.props.artists}
          user = {this.props.user} {...props} />)} />
    </div>
    );
  }
}

export default Admin;
