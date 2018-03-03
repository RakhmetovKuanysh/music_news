import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import images from './images';
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
          render = {(props) => (<AdminLogin
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:admin_id/panel/`} 
          render = {(props) => (<AdminMusic
          artists = {this.props.artists}
          music = {this.props.music}
          getArtist = {this.props.getArtist}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:admin_id/panel/music`} 
          render = {(props) => (<AdminMusic
          artists = {this.props.artists}
          music = {this.props.music}
          getArtist = {this.props.getArtist}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:admin_id/panel/music/add_new`} 
          render = {(props) => (<AddMusicNews
          artists = {this.props.artists}
          addMusicNews = {this.props.addMusicNews}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:admin_id/panel/artists`} 
          render = {(props) => (<AdminArtist
          artists = {this.props.artists}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:admin_id/panel/artists/add_new`} 
          render = {(props) => (<AddArtist
          addArtist = {this.props.addArtist}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:admin_id/panel/albums`} 
          render = {(props) => (<AdminAlbum
          albums = {this.props.albums}
          getArtist = {this.props.getArtist}
          user = {this.props.user} {...props} />)} />
        <Route exact path = {`${this.props.match.path}/:admin_id/panel/albums/add_new`} 
          render = {(props) => (<AddAlbum
          addAlbum = {this.props.addAlbum}
          artists = {this.props.artists}
          user = {this.props.user} {...props} />)} />
    </div>
    );
  }
}

export default Admin;
