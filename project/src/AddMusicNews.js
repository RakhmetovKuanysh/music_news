import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';
import AdminSidebar from './AdminSidebar';


class AddMusicNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "text": "",
      "title": "",
      "artist_id": 0,
      "img": "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.addMusicNews = this.addMusicNews.bind(this);
  }

  addMusicNews(e) {
    e.preventDefault();
    console.log("Hello");
    this.props.addMusicNews(this.state.text, this.state.title, this.state.artist_id, this.state.img);
  }

  handleChange(e) {
    if(e.target.name == "text") {
      this.setState({
        "text": e.target.value,
      });
    } else if(e.target.name == "title") {
      this.setState({
        "title": e.target.value,
      });
    } else if(e.target.name == "artist_id") {
      console.log(e.target.value);
      this.setState({
        "artist_id": e.target.value,
      });
    } else if(e.target.name == "img") {
      this.setState({
        "img": e.target.value,
      });
    }
    
  }

  render() {
    let id = this.props.user.id;

    return (
      <div>
        <AdminSidebar user = {this.props.user} />
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
                    <p>Add Music News</p>
                  </div>
                  <div class="panel-body">
                    <div class="canvas-wrapper">
                      <form onSubmit = {this.addMusicNews} method="post">
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
                            <select class="form-control" name="artist_id" onChange = {this.handleChange} 
                              value = {this.state.artist_id}>
                              {this.props.artists.map(artist =>
                                <option value={artist.id}>{artist.name}</option>
                              )}
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Text:</label>
                          <div class="col-sm-10">
                             <textarea class="form-control" onChange = {this.handleChange}
                              name="text" rows="5" value = {this.state.text} placeholder="Insert text"></textarea>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Img link:</label>
                          <div class="col-sm-10">
                            <input type="text" name="img" onChange = {this.handleChange} value = {this.state.img}
                              class="form-control" placeholder="Insert image link"/>
                          </div>
                        </div>
                        <input type="submit" className="btn btn-success float-right" value="ADD NEWS"/>
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

export default AddMusicNews;
