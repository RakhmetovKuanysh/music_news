import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';


class Artists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "grey">
        <Header />
        <div className = "artist-albums">
          <div className = "container white">
            <div className = "charts-header">
              <h1>ARTISTS</h1>
            </div>
            <div className = "horizontal-border"></div>
            <div className = "artist-album-list">
              {this.props.artists.map(artist => 
                <Link to = {`/artist/${artist.id}`} >
                  <div className = "col-md-3 artist-album-list-element">
                    <img src = {artist.img} />
                    <div>
                      <p className = "artist-album-list-title">{artist.name}</p>
                      <p className = "artist-album-list-date">{artist.genre}</p>
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

export default Artists;
