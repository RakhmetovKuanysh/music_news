import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class AddAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "title": "",
      "artist_id": "",
      "date": "",
      "photo_url": "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.addAlbum = this.addAlbum.bind(this);
    this.fileChange = this.fileChange.bind(this);
  }

  addAlbum(e) {
    e.preventDefault();
    
    var data = new FormData()
    data.append('photo_url', this.state.photo_url);
    data.append('title', this.state.title);
    data.append('artist_id', this.state.artist_id);
    data.append('date', this.state.date);

    const options = {
      method: 'POST',
      redirect: "follow",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: data,
      url: "http://localhost:8000/api/albums/",
    };
    axios(options);
  }

  handleChange(e) {
    if(e.target.name == "title") {
      this.setState({
        "title": e.target.value,
      });
    } else if(e.target.name == "artist_id") {
      this.setState({
        "artist_id": e.target.value,
      });
    } else if(e.target.name == "date") {
      this.setState({
        "date": e.target.value,
      });
    }
  }

  fileChange(e) {
    let image = e.target.files[0];

    this.setState({
      'photo_url': image,
    });
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
              <li>
                <Link to = {`/admin/artists`} >
                  <em class="fa fa-dashboard">&nbsp;</em>Artists
                </Link>
              </li>
              <li class="active">
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
                <li class="active">Albums</li>
              </ol>
            </div>
      
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">Albums</h1>
              </div>
            </div>
    
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <p>Add Music Album</p>
                  </div>
                  <div class="panel-body">
                    <div class="canvas-wrapper">
                      <form onSubmit = {this.addAlbum} method="post">
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Title:</label>
                          <div class="col-sm-10">
                            <input type="text" onChange = {this.handleChange} value = {this.state.title}
                              class="form-control" name="title" placeholder="Insert title"/>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Artist:</label>
                          <div class="col-sm-10">
                            <select class="form-control" value={this.state.artist_id} name="artist_id"
                              onChange = {this.handleChange} >
                              {this.props.artists.map(artist =>
                                <option key={artist.id} value={artist.id}>{artist.name}</option>
                              )}
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Date:</label>
                          <div class="col-sm-10">
                            <input type="text" onChange = {this.handleChange} value = {this.state.date}
                              class="form-control" name="date" placeholder="Insert date of the album"/>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Image:</label>
                          <div class="col-sm-10">
                            <input type="file" name="img" className="form-control-file" onChange = {this.fileChange} />
                          </div>
                        </div>
                        <input type="submit" className="btn btn-success float-right" value="ADD ALBUM"/>
                      </form>
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

export default AddAlbum;
