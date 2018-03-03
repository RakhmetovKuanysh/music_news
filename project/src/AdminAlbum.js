import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';
import AdminSidebar from './AdminSidebar';


class AdminAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "editableAlbum": null,
    }

    this.editAlbum = this.editAlbum.bind(this);
  }

  editAlbum(album) {
    console.log(album);
    this.setState({
      "editableAlbum": album,
    });

    console.log(this.state.editableAlbum);
  }

  render() {
    let id = this.props.user.id;

    let editBlock = null;

    if(this.state.editableAlbum != null) {
      editBlock = <div class="panel panel-default">
        <div class="panel-heading">
          <p>Edit Album</p>
        </div>
        <div class="panel-body">
          <div class="canvas-wrapper">
            
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
                            <tr key = {item.id} onClick = {(album) => this.editAlbum(item)}>
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
