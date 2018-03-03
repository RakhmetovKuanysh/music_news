import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';
import AdminSidebar from './AdminSidebar';


class AdminArtist extends Component {
  constructor(props) {
    super(props);
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
                    <Link to = {`/admin/${id}/panel/artists/add_new`}>
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
                          {this.props.artists.map(item => 
                            <tr key = {item.id} >
                              <th scope="row">{item.id}</th>
                              <td>{item.name}</td>
                              <td>{item.description.split(/\s+/).slice(0,10).join(" ")}...</td>
                              <td>{item.genre}</td>
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
