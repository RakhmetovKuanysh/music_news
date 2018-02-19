import React, { Component } from 'react';
import Header from './Header';


class Music extends Component {
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
      </div>
    );
  }
}

export default Music;
