import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BillboardHot100 from './BillboardHot100';
import Header from './Header';
import ChartsList from './ChartsList';


class Artist extends Component {
  render() {
    return (
      <div>
        <Route path = {`${this.props.match.path}/:number`} component = {ArtistRouter} />
      </div>
    );
  }
}


class ArtistRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path = {`${this.props.match.path}`} component = {ArtistInfo}/>
      </div>  
    );
  }
}


class ArtistInfo extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className = "container">
          <div className = "artist">
            <div className = "artist-info">
              <img src = "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/70/c4/04/70c40430-1a20-51fc-f1b7-8d695b255051/source/438x438sr.jpg" />
              <div className = "margin">
                <p className = "artist-info-name">Camila Cabello</p>
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
            </div>
            <div className = "artist-songs">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;

