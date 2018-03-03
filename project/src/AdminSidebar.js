import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import images from './images';


class AdminSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse"><span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span></button>
              <a class="navbar-brand" href="#">Admin</a>
            </div>
          </div>
        </nav>

        <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
          <div class="profile-sidebar">
            <div class="profile-userpic">
              <img src="http://placehold.it/50/30a5ff/fff" class="img-responsive" alt=""/>
            </div>
            <div class="profile-usertitle">
              <div class="profile-usertitle-name">{this.props.user.name} </div>
              <div class="profile-usertitle-status"><span class="indicator label-success"></span>Online</div>
              </div>
            <div class="clear"></div>
          </div>
          <ul class="nav menu">
            <li class="active">
              <Link to = {`/admin/${this.props.user.id}/panel/music`} >
                <em>&nbsp;</em>Music
              </Link>
            </li>
            <li>
              <Link to = {`/admin/${this.props.user.id}/panel/artists`} >
                <em class="fa fa-dashboard">&nbsp;</em>Artists
              </Link>
            </li>
            <li>
              <Link to = {`/admin/${this.props.user.id}/panel/albums`} >
                <em class="fa fa-dashboard">&nbsp;</em>Albums
              </Link>
            </li>
            <li class="parent "><a data-toggle="collapse" href="#sub-item-1">
              <em class="fa fa-navicon">&nbsp;</em> Charts <span data-toggle="collapse" href="#sub-item-1" class="icon pull-right"><em class="fa fa-plus"></em></span>
              </a>
              <ul class="children collapse" id="sub-item-1">
                <li><a class="" href="#">
                  <span class="fa fa-arrow-right">&nbsp;</span> Billboard Hot 100
                </a></li>
                <li><a class="" href="#">
                  <span class="fa fa-arrow-right">&nbsp;</span> Biilboard 200
                </a></li>
                <li><a class="" href="#">
                  <span class="fa fa-arrow-right">&nbsp;</span> Spotify 200
                </a></li>
                <li><a class="" href="#">
                  <span class="fa fa-arrow-right">&nbsp;</span> Apple Music Top 100
                </a></li>
                <li><a class="" href="#">
                  <span class="fa fa-arrow-right">&nbsp;</span> Radio Songs
                </a></li>
              </ul>
            </li>
            <li><a href="login.html"><em class="fa fa-power-off">&nbsp;</em> Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminSidebar;
