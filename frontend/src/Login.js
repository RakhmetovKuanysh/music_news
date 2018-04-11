import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from './images';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "login": "",
      "password": "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  handleChange(e) {
    if(e.target.type == "text") {
      this.setState({
        "login": e.target.value,
      });
    } else if(e.target.type == "password") {
      this.setState({
        "password": e.target.value,
      });
    }
  }

  sendForm(e) {
    e.preventDefault();
    this.props.getUser(this.state.login, this.state.password)
  }

  render() {
    if(this.props.user == null) {
      return (
        <div>
          <Header />
          <div className = "login-page">
            <div className = "col-md-6 col-md-offset-3">
              <div className = "jumbotron login-page-form">
                <form onSubmit = {this.sendForm}>
                  <input type = "text" value = {this.state.login} 
                    className = "form-control login-page-form-input" placeholder = "Login"
                    onChange = {this.handleChange} />
                  <input type = "password" value = {this.state.password}
                    className = "form-control login-page-form-input" placeholder = "Password" 
                    onChange = {this.handleChange} />
                  <input type = "submit" className = "btn btn-default login-page-btn" value = "Sign in"/>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Home />
        </div>
      );
    }
  }
}

export default Login;
