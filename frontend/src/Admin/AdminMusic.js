import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class AdminMusic extends Component {
  constructor(props) {
    super(props);

    this.deleteMusic = this.deleteMusic.bind(this);
  }

  deleteMusic(id) {
    console.log(id);

    axios.delete("http://localhost:8000/api/news/" + id + "/")
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
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
              <li class="active">
                <Link to = {`/admin/music`} >
                  <em>&nbsp;</em>Music
                </Link>
              </li>
              <li>
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
                <li class="active">Music</li>
              </ol>
            </div>
      
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">Music</h1>
              </div>
            </div>
    
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <p>List of Music News</p>
                    <Link to = {`/admin/music/add_new`}>
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
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Date</th>
                            <th scope="col">Text</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.music.map(item => 
                            <tr key = {item.id} >
                              <th scope="row">{item.id}</th>
                              <td>{item.title}</td>
                              <td>{item.artist.name}</td>
                              <td>{item.date}</td>
                              <td>{item.content.split(/\s+/).slice(0,10).join(" ")}...</td>
                              <td>
                                <button className="btn btn-danger" onClick={() => this.deleteMusic(item.id)}>
                                  X
                                </button>
                              </td>
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

export default AdminMusic;
