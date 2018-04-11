import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';
import AdminSidebar from './AdminSidebar';


class AddArtist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "name": "",
      "description": "",
      "genre": "",
      "img": "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.addArtist = this.addArtist.bind(this);
  }

  addArtist(e) {
    e.preventDefault();
    this.props.addArtist(this.state.name, this.state.description, this.state.genre, this.state.img);
  }

  handleChange(e) {
    if(e.target.name == "name") {
      this.setState({
        "name": e.target.value,
      });
    } else if(e.target.name == "description") {
      this.setState({
        "description": e.target.value,
      });
    } else if(e.target.name == "genre") {
      this.setState({
        "genre": e.target.value,
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
                <li class="active">Artist</li>
              </ol>
            </div>
      
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">Artist</h1>
              </div>
            </div>
    
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <p>Add Artist</p>
                  </div>
                  <div class="panel-body">
                    <div class="canvas-wrapper">
                      <form onSubmit = {this.addArtist} method="post">
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Name:</label>
                          <div class="col-sm-10">
                            <input type="text" onChange = {this.handleChange} value = {this.state.name}
                              class="form-control" name="name" placeholder="Insert name"/>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Genre:</label>
                          <div class="col-sm-10">
                            <select class="form-control" name="genre" onChange = {this.handleChange} 
                              value={this.state.genre}>
                                <option value="Pop">Pop</option>
                                <option value="Rock">Rock</option>
                                <option value="Jazz">Jazz</option>
                                <option value="Country">Country</option>
                                <option value="Electronic">Electronic</option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Description:</label>
                          <div class="col-sm-10">
                             <textarea class="form-control" onChange = {this.handleChange}
                              name="description" rows="5" placeholder="Insert description"
                              value = {this.state.description}></textarea>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Img link:</label>
                          <div class="col-sm-10">
                            <input type="text" name="img" onChange = {this.handleChange}
                              class="form-control" value = {this.state.img} placeholder="Insert image link"/>
                          </div>
                        </div>
                        <input type="submit" className="btn btn-success float-right" value="ADD ARTIST"/>
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

export default AddArtist;
