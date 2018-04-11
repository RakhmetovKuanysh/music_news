import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';
import AdminSidebar from './AdminSidebar';


class AdminAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "editableAlbum": null,
      "title": "",
      "artist_id": "",
      "date": "",
      "img": "",
    }

    this.editAlbum = this.editAlbum.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
  }

  makeEditable(album) {
    this.setState({
      "editableAlbum": album,
      "title": album.title,
      "artist_id": album.artist_id,
      "date": album.date,
      "img": album.img,
    });
  }

  editAlbum(e) {
    e.preventDefault();

    this.props.editAlbum(this.state.editableAlbum.id, this.state.title, this.state.artist_id,
      this.state.date, this.state.img);
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
    } else if(e.target.name == "img") {
      this.setState({
        "img": e.target.value,
      });
    } else if(e.target.name == "date") {
      this.setState({
        "date": e.target.value,
      });
    }
  }

  render() {
    let id = this.props.user.id;

    let editBlock = null;

    if(this.state.editableAlbum != null) {
      editBlock = 
      <div class="panel panel-default">
        <div class="panel-heading">
          <p>Edit Album</p>
        </div>
        <div class="panel-body">
          <div class="canvas-wrapper">
            <form onSubmit = {this.editAlbum} method="post">
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
                    value={this.state.artist_id}>
                    {this.props.artists.map(artist =>
                      <option value={artist.id}>{artist.name}</option>
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
                <label class="col-sm-2 col-form-label">Img link:</label>
                <div class="col-sm-10">
                  <input type="text" name="img" onChange = {this.handleChange}
                    class="form-control" value = {this.state.img} placeholder="Insert image link"/>
                </div>
              </div>
              <input type="submit" className="btn btn-primary float-right" value="EDIT ALBUM"/>
            </form>
          </div>
        </div>
      </div>
    }

    return (
      <div>
        <AdminSidebar user = {this.props.user} />
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
                    <p>List of Music Albums</p>
                    <Link to = {`/admin/${id}/panel/albums/add_new`}>
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
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.albums.map(item => 
                            <tr key = {item.id} onClick = {(album) => this.makeEditable(item)}>
                              <th scope="row">{item.id}</th>
                              <td>{item.title}</td>
                              <td>{this.props.getArtist(item.artist_id).name}</td>
                              <td>{item.date}</td>
                            </tr>  
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {editBlock}
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

export default AdminAlbum;
