import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import images from './images';


class AdminLogin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.user == null) {
      return (
        <div></div>
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
