import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';


class AdminLogin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Redirect to={`/admin/panel`} />
      </div>
    );
  }
}

export default AdminLogin;
