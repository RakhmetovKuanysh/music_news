import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Sidebar from './Sidebar';


class Artists extends Component {
  constructor(props) {
    super(props);
  }

  generateGenre(genre) {
    switch(genre) {
      case 0:
        return "Pop"
      case 1:
        return "R&B"
      case 2:
        return "Rap"
      case 3:
        return "Alternative"
      case 4:
        return "Hip Hop"
      default:
        return "No genre"
    }
  }

  render() {
    console.log(this.props.artists)
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
                    <img src = {"http://localhost:8000" + artist.photo_url} />
                    <div>
                      <p className = "artist-album-list-title">{artist.name}</p>
                      <p className = "artist-album-list-date">
                        {this.generateGenre(artist.genre)}
                      </p>
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
