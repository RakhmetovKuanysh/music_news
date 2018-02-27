import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';


class Footer extends Component {
  render() {
    return (
      <div className = "footer-container">
        <div className = "footer-content">
          <div className = "col-md-4 footer-content-element">
            <p>News portal about celebrities in bright and juicy presentation. 
            Exceptionally top and promising stars of the world and Russian show 
            business, as well as news of the blogger, beauty and film industry.</p>
          </div>
          <div className = "col-md-4 footer-content-element">
            <p>Connection with the editorial office<br/>
              On issues of cooperation and proposals:
              manager@popcake.tv
              <br/>
              On the work of the portal:<br/>
              tech@popcake.tv
            </p>
          </div>
          <div className = "col-md-4 footer-content-element">
            <p>Subscribe to news<br/>
              Do not want to miss the important news about the idol? Then subscribe to our
              VKontakte group, and we will notify you about new materials!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
