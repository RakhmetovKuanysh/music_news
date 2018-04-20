import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AdminArtist extends Component {
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
    return (
      <div>
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
                <div class="profile-usertitle-name">Admin </div>
                <div class="profile-usertitle-status"><span class="indicator label-success"></span>Online</div>
                </div>
              <div class="clear"></div>
            </div>
            <ul class="nav menu">
              <li>
                <Link to = {`/admin/music`} >
                  <em>&nbsp;</em>Music
                </Link>
              </li>
              <li class="active">
                <Link to = {`/admin/artists`} >
                  <em class="fa fa-dashboard">&nbsp;</em>Artists
                </Link>
              </li>
              <li>
                <Link to = {`/admin/albums`} >
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
        <div className = "adminBody">
          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <div class="row">
              <ol class="breadcrumb">
                <li class="active">Artists</li>
              </ol>
            </div>
      
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">Artists</h1>
              </div>
            </div>
    
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <p>List of Artists</p>
                    <Link to = {`/admin/artists/add_new`}>
                      <input type="button" className = "add-new-button btn btn-default" value = "+ ADD NEW"/>
                    </Link>
                  </div>
                  <div class="panel-body">
                    <div class="canvas-wrapper">
                      <form role="search">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Search" />
                        </div>
                      </form>
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Genre</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.artists.sort((a, b) => {
                              return a.id > b.id;
                            }).map(item => 
                            <tr key = {item.id} >
                              <th scope="row">{item.id}</th>
                              <td>{item.name}</td>
                              <td>{item.description.split(/\s+/).slice(0,10).join(" ")}...</td>
                              <td>{this.generateGenre(item.genre)}</td>
                            </tr>  
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12">
              <p class="back-link">Energy Of Music</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminArtist;
