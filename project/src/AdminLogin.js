import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import images from './images';
import Login from './Login';


class AdminLogin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.user == null) {
      return (
        <Login />
      );
    } else {
      return (
        <div>
          <Redirect to={`/admin/${this.props.user.id}/panel`} />
        </div>
      );
    }
  }
}

export default AdminLogin;
